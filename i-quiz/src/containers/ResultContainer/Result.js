import Level from "../levelContainer/Level";

export default class Result {
  constructor(answeredQuestions) {
 this.bodyDom = document.querySelector("body");
 this.finalScore=this.getFinalScore(answeredQuestions);
 this.percentage=this.getPercentage(answeredQuestions);

 this.bodyDom.innerHTML = `<div class="result-cont">
 <div class="score-cont">
  <img width="10%" src="./images/logo-img.png">
   <h1> I-Quiz </h1>
   <span>test result</span>
   <span> ${this.finalScore} out of ${answeredQuestions.length}<span>
 </div>
 <div class="percentage-cont">
    <div class="graphic-cont">
      <span> ${this.percentage}%</span>
    <div>
 </div>
 <div class="button-container">
 <button class="new-btn">
  take new quiz
 </button>
 </div>
 </div>
 `; 
 document.querySelector("button").addEventListener("click",()=>{
   new Level();
 })
  }
  


  getFinalScore(answers){
   let score= answers.reduce((accumalator, currentvalue) => {
     if (currentvalue.correct === currentvalue.answer) {
       return accumalator += 1;
     }
     else{
       return accumalator;
     }
   }, 0);
   return score; 
  }
  getPercentage(answers){
    return (this.finalScore/answers.length)*100;
  }
  
  
}