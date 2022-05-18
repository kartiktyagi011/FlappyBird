import MainControl, { GameStatus } from "./MainControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {

    //Speed of bird
    speed: number = 0;
    mainControl: MainControl = null;
    onLoad () {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.mainControl = cc.Canvas.instance.node.getComponent("MainControl");
    }

    
    update (dt: number) {
       //if(this.mainControl.gameStatus != GameStatus.Game_Playing){
         //  // return;
        //}
        this.speed -= 0.05;
        this.node.y += this.speed;

        var angle = -(this.speed/2) * 30;
        if (angle >= 30) {
            angle = 30;
        }
        this.node.rotation = angle;
        if (this.node.y >= 256 || this.node.y <= -256) {
            this.mainControl.gameOver();
            this.speed = 0;
        }
    }

    onTouchStart (event: cc.Event.EventTouch) {
        this.speed = 2;
    }
    /**onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        //game over
        cc.log("game over");
    }**/
   
    onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        // collider tag is 0, that means the bird have a collision with pipe, then game over
          
       
        
        if (other.tag === 0) {
            cc.log("game over");
            this.mainControl.gameOver();
            this.speed = 0;
        }
        // collider tag is 1, that means the bird cross a pipe, then add score
        else if (other.tag === 1) {
            this.mainControl.gameScore++;
            this.mainControl.labelScore.string = this.mainControl.gameScore.toString();
        }
    }
    
    
}
