export default function getQuizDom(question,isFirst,isLast,allAnswered,level) {
  let headerQuizDom;
  let questionDom;
  let inputsDom;
  let prevButtonDom;
  let nextButtonDom;
  let checkAnswersDom;

 
 
    headerQuizDom=  ` <div class="quiz-cont-details">
                 <img width="20%" src="./images/logo-img.png">
                 <h1> I-Quiz </h1>
                 <div class="quiz-cont-details-level">
                 <span> Quiz level: </span>
                 <span> ${level} </span>
                 </div>
            </div>`
    questionDom=`<div class="question-cont"><span>${question.question}</span></div>`
  
    if (question.answer){
        if (question.answer === "a") {
          inputsDom= ` 
            <div class="choices-div">
            <input type="radio" id="a" name="choices" value="${question.choices.a} checked">
            <label for="a">${question.choices.a}</label>
            <input type="radio" id="b" name="choices" value="${question.choices.b}">
            <label for="b">${question.choices.b}</label>
            <input type="radio" id="c" name="choices" value="${question.choices.c}">
            <label for="c">${question.choices.c}</label>
            <input type="radio" id="d" name="choices" value="${question.choices.d}">
            <label for="a">${question.choices.d}</label>    
            </div>
            </div>
            `;
        } 

        else if (question.answer === "b") {
          inputsDom=` 
            <div class="choices-div">
            <input type="radio" id="a" name="choices" value="${question.choices.a} ">
            <label for="a">${question.choices.a}</label>
            <input type="radio" id="b" name="choices" value="${question.choices.b}" checked>
            <label for="b">${question.choices.b}</label>
            <input type="radio" id="c" name="choices" value="${question.choices.c}">
            <label for="c">${question.choices.c}</label>
            <input type="radio" id="d" name="choices" value="${question.choices.d}">
            <label for="a">${question.choices.d}</label>    
            </div>
            </div>
            `;
        }

         else if (question.answer === "c") {
         inputsDom= ` 
            <div class="choices-div">
            <input type="radio" id="a" name="choices" value="${question.choices.a} ">
            <label for="a">${question.choices.a}</label>
            <input type="radio" id="b" name="choices" value="${question.choices.b}">
            <label for="b">${question.choices.b}</label>
            <input type="radio" id="c" name="choices" value="${question.choices.c}" checked>
            <label for="c">${question.choices.c}</label>
            <input type="radio" id="d" name="choices" value="${question.choices.d}">
            <label for="a">${question.choices.d}</label>    
            </div>
            </div>
            `;
        }
    
        else  {
          inputsDom=` 
            <div class="choices-div">
            <input type="radio" id="a" name="choices" value="${question.choices.a} ">
            <label for="a">${question.choices.a}</label>
            <input type="radio" id="b" name="choices" value="${question.choices.b}">
            <label for="b">${question.choices.b}</label>
            <input type="radio" id="c" name="choices" value="${question.choices.c}" >
            <label for="c">${question.choices.c}</label>
            <input type="radio" id="d" name="choices" value="${question.choices.d}" checked>
            <label for="a">${question.choices.d}</label>    
            </div>
            </div>
            `;
        }
    }
    
    else{

        inputsDom=     
         ` 
            <div class="choices-div">
            <input type="radio" id="a" name="choices" value="${question.choices.a} ">
            <label for="a">${question.choices.a}</label>
            <input type="radio" id="b" name="choices" value="${question.choices.b}">
            <label for="b">${question.choices.b}</label>
            <input type="radio" id="c" name="choices" value="${question.choices.c}" >
            <label for="c">${question.choices.c}</label>
            <input type="radio" id="d" name="choices" value="${question.choices.d}">
            <label for="a">${question.choices.d}</label>    
            </div>
            </div>
            `;
        }

     if(isFirst){
       prevButtonDom=`<button class="prev-btn" disabled="true">Prev</button>`
     }
     else{
          prevButtonDom=`<button class="prev-btn">prev</button>`
     }   


     if(isLast){
       nextButtonDom=`<button class="next-btn" disabled="true">next</button>` 
     }
     else{
        nextButtonDom=`<button class="next-btn">next</button>`  
     }


     if(allAnswered){
         checkAnswersDom=`<button class="check-btn">check answers</button>`
     }
     else{
          checkAnswersDom=`<button class="check-btn" disabled="true">check answers</button>`
     }
    

 return `<div class="quiz-cont">
         ${headerQuizDom}
         <div class="questioncard">
            ${questionDom}
            ${inputsDom} 
            <div class="actions-div">
            ${prevButtonDom}
            ${nextButtonDom}      
            </div>
        </div>
        <div class="results-div">
           ${checkAnswersDom}
        </div>    
    </div>`;




    }



  
 

