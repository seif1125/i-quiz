import getHomeDom from './Component/homeComponent';

export default class Home {

    constructor(){
       this.bodyDom=document.querySelector("body");
       this.bodyDom.innerHTML=getHomeDom();
    }
}