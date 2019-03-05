var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ball = (function (_super) {
    __extends(ball, _super);
    function ball() {
        var _this = _super.call(this) || this;
        _this.i = 1;
        return _this;
    }
    ball.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ball.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    ball.prototype.onButtonClick = function () {
    };
    ball.prototype.tweenFn = function (img, btn) {
        var _this = this;
        this.tw = egret.Tween.get(img);
        this.tw.to({
            y: 1000
        }, 500)
            .to({
            y: 120
        }, 500)
            .to({
            y: 1000
        }, 500)
            .to({
            y: 120
        }, 500)
            .to({
            y: 1000
        }, 500)
            .to({
            y: 120
        }, 500)
            .call(function () {
            btn.visible = true;
            _this.btn_start.currentState = "reset";
            _this.i = 4;
        });
    };
    // 足球运动fn
    ball.prototype.ballTween = function () {
        this.random = Math.random();
        this.tw = egret.Tween.get(this.img_ball);
        if (this.random < 0.5) {
            this.tweenFn(this.img_ball, this.win_Buttom);
        }
        else {
            this.tweenFn(this.img_ball, this.win_Top);
        }
    };
    return ball;
}(eui.Component));
__reflect(ball.prototype, "ball", ["eui.UIComponent", "egret.DisplayObject"]);
