
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BirdControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21cc6FRDsNJKoX0jtm2qPv+', 'BirdControl');
// Scripts/BirdControl.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdControl = /** @class */ (function (_super) {
    __extends(BirdControl, _super);
    function BirdControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Speed of bird
        _this.speed = 0;
        _this.mainControl = null;
        return _this;
    }
    BirdControl.prototype.onLoad = function () {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.mainControl = cc.Canvas.instance.node.getComponent("MainControl");
    };
    BirdControl.prototype.update = function (dt) {
        //if(this.mainControl.gameStatus != GameStatus.Game_Playing){
        //  // return;
        //}
        this.speed -= 0.05;
        this.node.y += this.speed;
        var angle = -(this.speed / 2) * 30;
        if (angle >= 30) {
            angle = 30;
        }
        this.node.rotation = angle;
        if (this.node.y >= 256 || this.node.y <= -256) {
            this.mainControl.gameOver();
            this.speed = 0;
        }
    };
    BirdControl.prototype.onTouchStart = function (event) {
        this.speed = 2;
    };
    /**onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        //game over
        cc.log("game over");
    }**/
    BirdControl.prototype.onCollisionEnter = function (other, self) {
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
    };
    BirdControl = __decorate([
        ccclass
    ], BirdControl);
    return BirdControl;
}(cc.Component));
exports.default = BirdControl;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmlyZENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF3REM7UUF0REcsZUFBZTtRQUNmLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFDOztJQW9EcEMsQ0FBQztJQW5ERyw0QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRixFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBR0QsNEJBQU0sR0FBTixVQUFRLEVBQVU7UUFDZiw2REFBNkQ7UUFDM0QsY0FBYztRQUNmLEdBQUc7UUFDSCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWMsS0FBMEI7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNEOzs7UUFHSTtJQUVKLHNDQUFnQixHQUFoQixVQUFrQixLQUFrQixFQUFFLElBQWlCO1FBQ25ELG9GQUFvRjtRQUlwRixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELHNFQUFzRTthQUNqRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztJQXJEZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXdEL0I7SUFBRCxrQkFBQztDQXhERCxBQXdEQyxDQXhEd0MsRUFBRSxDQUFDLFNBQVMsR0F3RHBEO2tCQXhEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udHJvbCwgeyBHYW1lU3RhdHVzIH0gZnJvbSBcIi4vTWFpbkNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlyZENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vU3BlZWQgb2YgYmlyZFxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBtYWluQ29udHJvbDogTWFpbkNvbnRyb2wgPSBudWxsO1xyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udHJvbCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIk1haW5Db250cm9sXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgdXBkYXRlIChkdDogbnVtYmVyKSB7XHJcbiAgICAgICAvL2lmKHRoaXMubWFpbkNvbnRyb2wuZ2FtZVN0YXR1cyAhPSBHYW1lU3RhdHVzLkdhbWVfUGxheWluZyl7XHJcbiAgICAgICAgIC8vICAvLyByZXR1cm47XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgdGhpcy5zcGVlZCAtPSAwLjA1O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XHJcblxyXG4gICAgICAgIHZhciBhbmdsZSA9IC0odGhpcy5zcGVlZC8yKSAqIDMwO1xyXG4gICAgICAgIGlmIChhbmdsZSA+PSAzMCkge1xyXG4gICAgICAgICAgICBhbmdsZSA9IDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPj0gMjU2IHx8IHRoaXMubm9kZS55IDw9IC0yNTYpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbC5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0IChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgfVxyXG4gICAgLyoqb25Db2xsaXNpb25FbnRlciAob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG4gICAgICAgIC8vZ2FtZSBvdmVyXHJcbiAgICAgICAgY2MubG9nKFwiZ2FtZSBvdmVyXCIpO1xyXG4gICAgfSoqL1xyXG4gICBcclxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICAvLyBjb2xsaWRlciB0YWcgaXMgMCwgdGhhdCBtZWFucyB0aGUgYmlyZCBoYXZlIGEgY29sbGlzaW9uIHdpdGggcGlwZSwgdGhlbiBnYW1lIG92ZXJcclxuICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJnYW1lIG92ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2wuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbGxpZGVyIHRhZyBpcyAxLCB0aGF0IG1lYW5zIHRoZSBiaXJkIGNyb3NzIGEgcGlwZSwgdGhlbiBhZGQgc2NvcmVcclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbC5nYW1lU2NvcmUrKztcclxuICAgICAgICAgICAgdGhpcy5tYWluQ29udHJvbC5sYWJlbFNjb3JlLnN0cmluZyA9IHRoaXMubWFpbkNvbnRyb2wuZ2FtZVNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG4iXX0=