export default function getLevelDom(showstart) {
  if(showstart){
  return (`<div class="level-cont">
        <img width="30%" src="./images/logo-img.png">
        <h1> I-Quiz </h1>
        <span>WHAT please Select your test level</span>
        <div class="level-cont-cards">
        <div class="level-card">
          <input type="radio" id="easy" name="choices"  >
          
            <label for="easy">easy</label>
        </div>
        <div class="level-card">
          <input type="radio" id="medium" name="choices"  >
          <label for="medium">medium</label>
        </div>
        <div class="level-card">
          <input type="radio" id="advanced" name="choices">
          <label for="advanced">advanced</label>
        </div>
        </div>
        <button class="quiz-btn">Take the quiz</button>
        </div>

        `);}
    else{
        return (`<div class="level-cont">
        <img width="30%" src="./images/logo-img.png">
        <h1> I-Quiz </h1>
        <span>WHAT please Select your test level</span>
        <div class="level-cont-cards">
        <div class="level-card">
          <input type="radio" id="easy" name="choices"  >
          
            <label for="easy">easy</label>
        </div>
        <div class="level-card">
          <input type="radio" id="medium" name="choices"  >
          <label for="medium">medium</label>
        </div>
        <div class="level-card">
          <input type="radio" id="advanced" name="choices">
          <label for="advanced">advanced</label>
        </div>
        </div>
        <button class="quiz-btn" disbled="true>Take the quiz</button>
        
        </div>

        
    `);
  }
}
