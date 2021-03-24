import getQuizDom from "./Component/quizComponent";
import Result from "../ResultContainer/Result"

export default class Quiz {
  constructor(level) {
    this.level=level
    this.questions = [
      {
        question: "5+5=",
        choices: { a: 6, b: 7, c: 8, d: 10 },
        correct: "d",
      },
      {
        question: "5+7=",
        choices: { a: 12, b: 7, c: 8, d: 10 },
        correct: "a",
      },
    ];
    this.questionindex = 0;
    this.firstQuestion = this.isFirstQuestion();
    this.lastQuestion = this.isLastQuestion();
    this.questionsAnswered = this.allQuestionsAnswered();

    this.bodyDom = document.querySelector("body");
    this.addQuestionToDom();
  }
  addQuestionToDom() {
    this.bodyDom.innerHTML = getQuizDom(
      this.questions[this.questionindex],
      this.firstQuestion,
      this.lastQuestion,
      this.questionsAnswered,
      this.level
      
    );

    document
      .getElementsByClassName("prev-btn")[0]
      .addEventListener("click", () => {
        console.log(this.questions)
        this.moveToPrevQuestion();
      });
    document
      .getElementsByClassName("next-btn")[0]
      .addEventListener("click", () => {
        this.moveToNextQuestion();
      });

    document.getElementsByClassName("check-btn")[0].addEventListener("click",()=>{
      console.log("leave");
      new Result(this.questions);
    })  
      let inputs=document.getElementsByTagName("input")
      console.log(inputs);
     for(let i=0;i<inputs.length;i++){
       inputs[i].addEventListener("click",()=>{
         this.addAnswer(inputs[i].attributes[1].nodeValue)
         this.questionsAnswered=this.allQuestionsAnswered();
         this.addQuestionToDom();
        });

     }
  }

  moveToNextQuestion() {
    this.questionindex += 1;
    this.firstQuestion = false;
    this.lastQuestion = this.isLastQuestion();
    this.addQuestionToDom();
  }
  moveToPrevQuestion() {
    this.questionindex = this.questionindex - 1;
    this.firstQuestion = this.isFirstQuestion();
    this.lastQuestion = false;
    this.questionsAnswered = this.allQuestionsAnswered();

    this.addQuestionToDom();
  }

  isFirstQuestion() {
    if (this.questionindex === 0) {
      return true;
    } else {
      return false;
    }
  }
  isLastQuestion() {
    if (this.questionindex + 1 == this.questions.length) {
      return true;
    } else {
      return false;
    }
  }
  allQuestionsAnswered() {
 
    return this.questions.every((question) => question.answer);
  }

  addAnswer(id){
    this.questions[this.questionindex].answer=id;
    console.log(this.questions)
  }
}
