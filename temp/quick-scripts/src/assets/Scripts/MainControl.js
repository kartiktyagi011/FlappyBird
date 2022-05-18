"use strict";
cc._RF.push(module, 'fb5583Q7CxFgbWzI8TY3Pdl', 'MainControl');
// Scripts/MainControl.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStatus = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["Game_Ready"] = 0] = "Game_Ready";
    GameStatus[GameStatus["Game_Playing"] = 1] = "Game_Playing";
    GameStatus[GameStatus["Game_Over"] = 2] = "Game_Over";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
var MainControl = /** @class */ (function (_super) {
    __extends(MainControl, _super);
    function MainControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spBG = [null, null];
        _this.pipePrefab = null;
        _this.pipe = [null, null, null];
        _this.gameStatus = GameStatus.Game_Over;
        _this.labelScore = null;
        // record score
        _this.gameScore = 0;
        return _this;
        /**onCollisionEnter (other: cc.Collider, self: cc.Collider) {
            //game over
            cc.log("game over");
        }**/
    }
    MainControl.prototype.onLoad = function () {
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        //open debug draw when you debug the game
        //do not forget to close when you ship the game
        collisionManager.enabledDebugDraw = true;
        // find the GameOver node, and set active property to false
        this.spGameOver = this.node.getChildByName("GameOver").getComponent(cc.Sprite);
        this.spGameOver.node.active = false;
        this.StartButton = this.node.getChildByName("StartButton").getComponent(cc.Button);
        this.StartButton.node.on(cc.Node.EventType.TOUCH_END);
    };
    MainControl.prototype.start = function () {
        //this.StartButton.node.active= false;
        //this.gameStatus=GameStatus.Game_Playing;
        //this.spGameOver.node.active=false;
        for (var i = 0; i < this.pipe.length; i++) {
            this.pipe[i] = cc.instantiate(this.pipePrefab);
            this.node.addChild(this.pipe[i]);
            this.pipe[i].x = 170 + 200 * i;
            var minY = -120;
            var maxY = 120;
            this.pipe[i].y = minY + Math.random() * (maxY - minY);
            this.gameScore = 0;
            this.labelScore.string = this.gameScore.toString();
            var Bird = this.node.getChildByName("Bird");
            Bird.y = 0;
            Bird.rotation = 0;
        }
    };
    MainControl.prototype.update = function (dt) {
        if (this.gameStatus == GameStatus.Game_Playing) {
            return;
        }
        for (var i = 0; i < this.spBG.length; i++) {
            this.spBG[i].node.x -= 1;
            if (this.spBG[i].node.x <= -900) {
                this.spBG[i].node.x = 900;
            }
        }
        for (var i = 0; i < this.pipe.length; i++) {
            this.pipe[i].x -= 1.0;
            if (this.pipe[i].x <= -170) {
                this.pipe[i].x = 430;
                var minY = -120;
                var maxY = 120;
                this.pipe[i].y = minY + Math.random() * (maxY - minY);
            }
        }
    };
    MainControl.prototype.gameOver = function () {
        this.spGameOver.node.active = true;
        // cc.log("Game_Over");
        this.StartButton.Node.active = true;
        this.gameStatus = GameStatus.Game_Over;
    };
    __decorate([
        property(cc.Sprite)
    ], MainControl.prototype, "spBG", void 0);
    __decorate([
        property(cc.Prefab)
    ], MainControl.prototype, "pipePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], MainControl.prototype, "StartButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], MainControl.prototype, "spGameOver", void 0);
    __decorate([
        property(cc.Label)
    ], MainControl.prototype, "labelScore", void 0);
    MainControl = __decorate([
        ccclass
    ], MainControl);
    return MainControl;
}(cc.Component));
exports.default = MainControl;

cc._RF.pop();