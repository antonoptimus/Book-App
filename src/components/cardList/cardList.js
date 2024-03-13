<<<<<<< HEAD
import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
=======
import { DivComponent } from "../../views/main/div-component";
>>>>>>> 9c133a6f44191ab0a7a340dee5973d601edfb68f
import "./cardList.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
<<<<<<< HEAD
      this.el.innerHTML = '<div class="card_list__loader">Загрузка...</div>';
      return this.el;
    }
    const cardGrid = document.createElement("div");
    cardGrid.classList.add("card__grid");
    this.el.append(cardGrid);
    for (const card of this.parentState.list) {
      cardGrid.append(new Card(this.appState, card).render());
    }
=======
      this.el.innerHTML = '<div class="card_list__loader">Loading...</div>';
      return this.el;
    }
    this.el.classList.add("card_list");
    this.el.innerHTML = `
      <h1>Найдено книг - ${this.parentState.list.length}</h1>
    `;
>>>>>>> 9c133a6f44191ab0a7a340dee5973d601edfb68f
    return this.el;
  }
}
