import Home from './homeContainer/Home'
import Level from './levelContainer/Level'
export default class MainContainer{

    constructor(){
        console.log("from main")
        this.currentscreen=new Home();
    }
    getcontainer(){
        return this.currentscreen;
    }
    


}