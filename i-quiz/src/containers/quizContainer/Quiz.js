import getQuizDom from "./Component/quizComponent";

export default class Quiz {
  constructor() {
    this.bodyDom = document.querySelector("body");
    this.bodyDom.innerHTML = getQuizDom();
  }
  
  
}
