class ball extends eui.Component implements  eui.UIComponent {
	
	public btn_start: eui.Button;
	public img_ball: eui.Image;
	public win_Top: eui.Image;
	public win_Buttom: eui.Image;
	public i: number = 1;
	public tw: egret.Tween;

	// 用于判断输赢的 0 到 1 之间的随机数
	random: number;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
	}

	private onButtonClick() {

	}
	
	private tweenFn(img: eui.Image, btn: eui.Image) {
		this.tw = egret.Tween.get(img);
		this.tw.to({
			y: 1000
		},500)
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
		.call(()=>{
			btn.visible = true;
			this.btn_start.currentState = "reset";
			this.i = 4;
		})
	}

	// 足球运动fn
	private ballTween() {
		this.random = Math.random();
		this.tw = egret.Tween.get(this.img_ball);
		if(this.random < 0.5) {
			this.tweenFn(this.img_ball, this.win_Buttom);
		} else {
			this.tweenFn(this.img_ball, this.win_Top);
		}
	}
}