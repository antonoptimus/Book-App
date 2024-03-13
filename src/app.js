import { FavoritesView } from "./views/main/favorites/favorites.js";
import { MainView } from "./views/main/main.js";

class App {
  routes = [
    { path: "", view: MainView },
    { path: "#favorites", view: FavoritesView },
  ];
  appState = {
    favorites: [],
  };

  constructor() {
    // Добавляем слушатель события hashchange, который вызывает метод route() с привязкой контекста к текущему экземпляру класса App.
    window.addEventListener("hashchange", this.route.bind(this));
    // При создании экземпляра класса App сразу же вызываем метод route().
    this.route();
  }

  // Метод route() обрабатывает изменения маршрута и отображает соответствующее представление.
  route() {
    // Если текущее представление существует, вызываем его метод destroy(), чтобы подготовиться к отображению нового представления.
    if (this.currentView) {
      this.currentView.destroy();
    }
    // Находим представление, соответствующее текущему маршруту (location.hash) в массиве маршрутов routes.
    const view = this.routes.find((r) => r.path === location.hash).view;
    // Создаём новый экземпляр найденного представления, передавая ему текущее состояние приложения appState.
    this.currentView = new view(this.appState);
    // Отображаем созданное представление.
    this.currentView.render();
  }
}

// Создаём экземпляр класса App.
new App();
