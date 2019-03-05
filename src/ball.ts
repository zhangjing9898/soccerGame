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

	// 点击button
	private onButtonClick(e: egret.TouchEvent) {
		switch(this.i) {
			// 游戏开始
			case 1:
				// 开始游戏
				this.ballTween();
				this.i++;
				this.btn_start.currentState = "pause";
				break;
			case 2:
				// 暂停游戏
				this.tw.setPaused(true);
				this.i++;
				this.btn_start.currentState = "resume";
				break;
			case 3:
				// 继续游戏
				this.tw.setPaused(false);
				this.btn_start.currentState = "pause";
				this.i = 2;
				break;
			case 4:
				// 重新游戏
				this.win_Top.visible = false;
				this.win_Buttom.visible = false;
				// 将足球图片位置居中
				this.img_ball.x = this.stage.width / 2 - this.img_ball.width / 2;
				this.img_ball.y = this.stage.height / 2 - this.img_ball.height / 2;
				this.i = 1;
				this.btn_start.currentState = "up";
				break;
		}
	}
	
	// ball tween fn
	private tweenFn(img: eui.Image, btn: eui.Image) {
		this.tw = egret.Tween.get(img);
		this.tw.to({
			y: 700
		},500)
		.to({
			y: 10
		}, 500)
		.to({
			y: 700
		}, 500)
		.to({
			y: 10
		}, 500)
		.to({
			y: 700
		}, 500)
		.to({
			y: 10
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