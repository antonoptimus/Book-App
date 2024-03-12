import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";

export class MainView extends AbstractView {
  // Определяем состояние представления по умолчанию.
  state = {
    list: [],
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  // Конструктор класса MainView, принимающий состояние приложения appState.
  constructor(appState) {
    // Вызываем конструктор родительского класса (AbstractView).
    super();
    // Присваиваем переданное состояние приложения переменной appState.
    this.appState = appState;
    // Создаём прокси для отслеживания изменений состояния приложения с помощью библиотеки on-change.
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.appStateHook.bind(this));
    // Устанавливаем заголовок страницы.
    this.setTitle("Поиск книг");
  }

  // Метод обратного вызова для отслеживания изменений в состоянии приложения.
  appStateHook(path) {
    // Если произошли изменения в разделе "favorites" состояния приложения, можно выполнить дополнительные действия.
    if (path === "favorites") {
      // Например, можно вызвать метод render() для перерисовки представления.
      // this.render();
    }
  }

  async stateHook(path) {
    if (path === "searchQuery") {
      this.state.loading = true;
      const data = await this.loadList(
        this.state.searchQuery,
        this.state.offset
      );
      this.state.loading = false;
      this.state.list = data.docs;
    }
  }

  async loadList(q, offset) {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${q}&offset=${offset}`
    );
    return res.json();
  }

  // Метод отрисовки представления.
  render() {
    // Создаём основной контейнер для представления.
    const main = document.createElement("div");
    main.append(new Search(this.state).render());
    // Очищаем содержимое представления.
    this.app.innerHTML = "";
    // Добавляем созданный контейнер в корневой элемент представления.
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
