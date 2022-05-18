
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/AudioSourceControl');
require('./assets/Scripts/BirdControl');
require('./assets/Scripts/MainControl');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AudioSourceControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85755RSIABK8pHG06qDXlqG', 'AudioSourceControl');
// Scripts/AudioSourceControl.ts

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
exports.SoundType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// sound type enum
var SoundType;
(function (SoundType) {
    SoundType[SoundType["E_Sound_Fly"] = 0] = "E_Sound_Fly";
    SoundType[SoundType["E_Sound_Score"] = 1] = "E_Sound_Score";
    SoundType[SoundType["E_Sound_Die"] = 2] = "E_Sound_Die";
})(SoundType = exports.SoundType || (exports.SoundType = {}));
var AudioSourceControl = /** @class */ (function (_super) {
    __extends(AudioSourceControl, _super);
    function AudioSourceControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundMusic = null;
        // sound effect when bird flying
        _this.flySound = null;
        _this.scoreSound = null;
        _this.dieSound = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    AudioSourceControl.prototype.start = function () {
        // play background music
        cc.audioEngine.playMusic(this.backgroundMusic, true);
    };
    AudioSourceControl.prototype.playSound = function (type) {
        if (type == SoundType.E_Sound_Fly) {
            cc.audioEngine.playEffect(this.flySound, false);
        }
        else if (type == SoundType.E_Sound_Score) {
            cc.audioEngine.playEffect(this.scoreSound, false);
        }
        else if (type == SoundType.E_Sound_Die) {
            cc.audioEngine.playEffect(this.dieSound, false);
        }
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioSourceControl.prototype, "backgroundMusic", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioSourceControl.prototype, "flySound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioSourceControl.prototype, "scoreSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], AudioSourceControl.prototype, "dieSound", void 0);
    AudioSourceControl = __decorate([
        ccclass
    ], AudioSourceControl);
    return AudioSourceControl;
}(cc.Component));
exports.default = AudioSourceControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXVkaW9Tb3VyY2VDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxrQkFBa0I7QUFDbEIsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLHVEQUFlLENBQUE7SUFDZiwyREFBYSxDQUFBO0lBQ2IsdURBQVcsQ0FBQTtBQUNmLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUdEO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBcUNDO1FBbENHLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUVyQyxnQ0FBZ0M7UUFFaEMsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBaUIsSUFBSSxDQUFDOztRQXVCOUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixrQ0FBSyxHQUFMO1FBQ0ksd0JBQXdCO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVyxJQUFlO1FBQ3RCLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDthQUNJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyRDthQUNJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDcEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOytEQUNPO0lBSXJDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3REFDQTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MERBQ0U7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO3dEQUNBO0lBYmIsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FxQ3RDO0lBQUQseUJBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQytDLEVBQUUsQ0FBQyxTQUFTLEdBcUMzRDtrQkFyQ29CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLy8gc291bmQgdHlwZSBlbnVtXHJcbmV4cG9ydCBlbnVtIFNvdW5kVHlwZSB7XHJcbiAgICBFX1NvdW5kX0ZseSA9IDAsXHJcbiAgICBFX1NvdW5kX1Njb3JlLFxyXG4gICAgRV9Tb3VuZF9EaWVcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Tb3VyY2VDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGJhY2tncm91bmRNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBzb3VuZCBlZmZlY3Qgd2hlbiBiaXJkIGZseWluZ1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBmbHlTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIHNjb3JlU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBkaWVTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gcGxheSBiYWNrZ3JvdW5kIG11c2ljXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmFja2dyb3VuZE11c2ljLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5U291bmQgKHR5cGU6IFNvdW5kVHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlID09IFNvdW5kVHlwZS5FX1NvdW5kX0ZseSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZmx5U291bmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSBTb3VuZFR5cGUuRV9Tb3VuZF9TY29yZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVTb3VuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09IFNvdW5kVHlwZS5FX1NvdW5kX0RpZSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllU291bmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MainControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFpbkNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQWEsVUFJWjtBQUpELFdBQWEsVUFBVTtJQUNmLHVEQUFZLENBQUE7SUFDWiwyREFBWSxDQUFBO0lBQ1oscURBQVMsQ0FBQTtBQUNqQixDQUFDLEVBSlksVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJdEI7QUFFRDtJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTRGQztRQXpGRyxVQUFJLEdBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBSzdCLFVBQUksR0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDcEMsZ0JBQVUsR0FBWSxVQUFVLENBQUMsU0FBUyxDQUFBO1FBSzFDLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGVBQWU7UUFDZixlQUFTLEdBQVcsQ0FBQyxDQUFDOztRQXFFdEI7OztZQUdJO0lBQ1IsQ0FBQztJQXZFSSw0QkFBTSxHQUFOO1FBQ0csSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekQsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNoQyx5Q0FBeUM7UUFDekMsK0NBQStDO1FBQy9DLGdCQUFnQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUV6QywyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FB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Q0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFFckIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7SUFFTCxDQUFDO0lBQ0QsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEMsdUJBQXVCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRSxVQUFVLENBQUMsU0FBUyxDQUFDO0lBRTFDLENBQUM7SUFwRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDYTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ047SUFNWjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNUO0lBRVg7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUztJQWhCWCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNEYvQjtJQUFELGtCQUFDO0NBNUZELEFBNEZDLENBNUZ3QyxFQUFFLENBQUMsU0FBUyxHQTRGcEQ7a0JBNUZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuZXhwb3J0ICBlbnVtIEdhbWVTdGF0dXN7XHJcbiAgICAgICAgR2FtZV9SZWFkeT0wLFxyXG4gICAgICAgIEdhbWVfUGxheWluZyAsXHJcbiAgICAgICAgR2FtZV9PdmVyLFxyXG59XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwQkc6IGNjLlNwcml0ZVtdID0gW251bGwsIG51bGxdO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBpcGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTdGFydEJ1dHRvbjtcclxuXHJcbiAgICBwaXBlOiBjYy5Ob2RlW10gPSBbbnVsbCwgbnVsbCwgbnVsbF1cclxuICAgIGdhbWVTdGF0dXM6R2FtZVN0YXR1cz1HYW1lU3RhdHVzLkdhbWVfT3ZlclxyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3BHYW1lT3ZlcjtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgLy8gcmVjb3JkIHNjb3JlXHJcbiAgICBnYW1lU2NvcmU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIGNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL29wZW4gZGVidWcgZHJhdyB3aGVuIHlvdSBkZWJ1ZyB0aGUgZ2FtZVxyXG4gICAgICAgIC8vZG8gbm90IGZvcmdldCB0byBjbG9zZSB3aGVuIHlvdSBzaGlwIHRoZSBnYW1lXHJcbiAgICAgICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgXHJcbiAgICAgICAgLy8gZmluZCB0aGUgR2FtZU92ZXIgbm9kZSwgYW5kIHNldCBhY3RpdmUgcHJvcGVydHkgdG8gZmFsc2VcclxuICAgICAgICB0aGlzLnNwR2FtZU92ZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lT3ZlclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnNwR2FtZU92ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlN0YXJ0QnV0dG9uPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlN0YXJ0QnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuU3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgICAvL3RoaXMuU3RhcnRCdXR0b24ubm9kZS5hY3RpdmU9IGZhbHNlO1xyXG4gICAgICAgICAvL3RoaXMuZ2FtZVN0YXR1cz1HYW1lU3RhdHVzLkdhbWVfUGxheWluZztcclxuICAgICAgICAgLy90aGlzLnNwR2FtZU92ZXIubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpcGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5waXBlW2ldID0gY2MuaW5zdGFudGlhdGUodGhpcy5waXBlUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMucGlwZVtpXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBpcGVbaV0ueCA9IDE3MCArIDIwMCAqIGk7XHJcbiAgICAgICAgICAgIHZhciBtaW5ZID0gLTEyMDtcclxuICAgICAgICAgICAgdmFyIG1heFkgPSAxMjA7XHJcbiAgICAgICAgICAgIHRoaXMucGlwZVtpXS55ID0gbWluWSArIE1hdGgucmFuZG9tKCkgKiAobWF4WSAtIG1pblkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nYW1lU2NvcmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsU2NvcmUuc3RyaW5nID0gdGhpcy5nYW1lU2NvcmUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBCaXJkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmlyZFwiKTtcclxuICAgICAgICAgICAgQmlyZC55PTA7XHJcbiAgICAgICAgICAgIEJpcmQucm90YXRpb249MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0dXMgPT0gR2FtZVN0YXR1cy5HYW1lX1BsYXlpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3BCRy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNwQkdbaV0ubm9kZS54IC09IDEgO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcEJHW2ldLm5vZGUueCA8PSAtOTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwQkdbaV0ubm9kZS54ID0gOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGlwZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBpcGVbaV0ueCAtPSAxLjA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBpcGVbaV0ueCA8PSAtMTcwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpcGVbaV0ueCA9IDQzMDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWluWSA9IC0xMjA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4WSA9IDEyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlwZVtpXS55ID0gbWluWSArIE1hdGgucmFuZG9tKCkgKiAobWF4WSAtIG1pblkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGdhbWVPdmVyICgpIHtcclxuICAgICAgICB0aGlzLnNwR2FtZU92ZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgLy8gY2MubG9nKFwiR2FtZV9PdmVyXCIpO1xyXG4gICAgICAgIHRoaXMuU3RhcnRCdXR0b24uTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cz0gR2FtZVN0YXR1cy5HYW1lX092ZXI7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC8qKm9uQ29sbGlzaW9uRW50ZXIgKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICAvL2dhbWUgb3ZlclxyXG4gICAgICAgIGNjLmxvZyhcImdhbWUgb3ZlclwiKTtcclxuICAgIH0qKi9cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
