import getLevelDom from "./Component/levelComponent";
import Quiz from'../quizContainer/Quiz';

export default class Level {
  constructor() {
    this.level="",
    this.showstart=false;
    this.bodyDom = document.querySelector("body");
    this.addLevelsToDom(this.showstart)
  }

  addLevelsToDom (showstart){
        this.bodyDom = document.querySelector("body");
    this.bodyDom.innerHTML = getLevelDom(showstart);
    this.quizBtn = document.querySelector(".quiz-btn");
    let inputs = document.getElementsByTagName("input");
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("click", () => {
        inputs[i].checked="checked";
        this.addLevel(inputs[i].attributes[1].nodeValue);
      });
    }

    this.quizBtn.addEventListener("click", () => (this.bodyDom = new Quiz(this.level)));
  }

  addLevel(id) {
    this.level=id;
    this.showstart=true;
    this.addLevelsToDom(this.showstart)

    
  
  }
}

