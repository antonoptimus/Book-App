import { DivComponent } from "../../views/main/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector("input").value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
    <div class="search__wrapper">
    <input
      type="text"
      value="${this.state.searchQuery ? this.state.searchQuery : ""}"
      placeholder="Найти книгу или автора..."
      class="search__input"
    />
    <img src="/static/search-black.svg" alt="Search icon" />
  </div>
  <button aria-label="Search">
    <img src="/static/search-white.svg" alt="Search icon" />
  </button>
    `;
    this.el
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.el.querySelector("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.search();
      }
    });
    return this.el;
  }
}
