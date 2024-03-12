import { DivComponent } from "../../views/main/div-component";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add("header");
    this.el.innerHTML = `
    <div>
      <img src="/static/logo.svg" alt="Logotype" />
    </div>
    <div class="menu">
      <a href="#" class="menu__item">
        <img src="/static/search-black.svg" alt="Search icon" />
        <p>Поиск книг</p>
      </a>
      <a href="#favorites" class="menu__item">
        <img src="/static/favorites.svg" alt="Favorites icon" />
        <p>Избранное</p>
        <div class="menu__counter">
          ${this.appState.favorites.length}
        </div>
      </a>
    </div>
    `;
    return this.el;
  }
}
