import getLevelDom from "./Component/levelComponent";

export default class Level {
  constructor() {
    this.bodyDom = document.querySelector("body");
    this.bodyDom.innerHTML = getLevelDom();
  }
}
