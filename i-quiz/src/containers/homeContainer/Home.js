import getHomeDom from './Component/homeComponent';
import Level from '../levelContainer/Level'

export default class Home {

    constructor(switchfunction){
        console.log("home component")
       this.bodyDom=document.querySelector("body");
       this.bodyDom.innerHTML=getHomeDom();
       this.startbtn=document.querySelector(".start-btn");
       this.startbtn.addEventListener("click",()=>{
           this.bodyDom=new Level();
       })
    }

 
}