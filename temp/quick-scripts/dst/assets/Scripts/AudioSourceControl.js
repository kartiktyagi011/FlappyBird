
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