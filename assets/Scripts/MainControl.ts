// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
export  enum GameStatus{
        Game_Ready=0,
        Game_Playing ,
        Game_Over,
}
@ccclass
export default class MainControl extends cc.Component {
    
    @property(cc.Sprite)
    spBG: cc.Sprite[] = [null, null];
    @property(cc.Prefab)
    pipePrefab: cc.Prefab = null;

    @property(cc.Node)
    StartButton;

    pipe: cc.Node[] = [null, null, null]
    gameStatus:GameStatus=GameStatus.Game_Over
    
    @property(cc.Sprite)
    spGameOver;
    @property(cc.Label)
    labelScore: cc.Label = null;
    
    // record score
    gameScore: number = 0;

     onLoad () {
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        //open debug draw when you debug the game
        //do not forget to close when you ship the game
        collisionManager.enabledDebugDraw = true;
   
        // find the GameOver node, and set active property to false
        this.spGameOver = this.node.getChildByName("GameOver").getComponent(cc.Sprite);
        this.spGameOver.node.active = false;
        this.StartButton=this.node.getChildByName("StartButton").getComponent(cc.Button);
        this.StartButton.node.on(cc.Node.EventType.TOUCH_END);
    }

    start() {
         //this.StartButton.node.active= false;
         //this.gameStatus=GameStatus.Game_Playing;
         //this.spGameOver.node.active=false;
        for (let i = 0; i < this.pipe.length; i++) {
            this.pipe[i] = cc.instantiate(this.pipePrefab);
            this.node.addChild(this.pipe[i]);

            this.pipe[i].x = 170 + 200 * i;
            var minY = -120;
            var maxY = 120;
            this.pipe[i].y = minY + Math.random() * (maxY - minY);

            this.gameScore = 0;
            this.labelScore.string = this.gameScore.toString();

            var Bird = this.node.getChildByName("Bird");
            Bird.y=0;
            Bird.rotation=0;
        }

    }
    update(dt: number) {
        if(this.gameStatus == GameStatus.Game_Playing){
            return;
            
        }
        for (let i = 0; i < this.spBG.length; i++) {
            this.spBG[i].node.x -= 1 ;
            if (this.spBG[i].node.x <= -900) {
                this.spBG[i].node.x = 900;
            }
        }

        for (let i = 0; i < this.pipe.length; i++) {
            this.pipe[i].x -= 1.0;
            if (this.pipe[i].x <= -170) {
                this.pipe[i].x = 430;

                var minY = -120;
                var maxY = 120;
                this.pipe[i].y = minY + Math.random() * (maxY - minY);
            }
        }

    }
    gameOver () {
        this.spGameOver.node.active = true;
       // cc.log("Game_Over");
        this.StartButton.Node.active = true;
        this.gameStatus= GameStatus.Game_Over;
    
    }
    /**onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        //game over
        cc.log("game over");
    }**/
}
