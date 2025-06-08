const { regClass, property } = Laya;

@regClass()
export class AIPlayerController extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Sprite, tips: "足球" })
    public ball: Laya.Sprite = null;

    private readonly minX = 1020;
    private readonly maxX = 1660;

    //#region 生命周期
    public onUpdate(): void {
        if (this.ball.x > this.minX && this.ball.x < this.maxX) {
            this.owner.x = this.ball.x;
        }
    }
    //#endregion 生命周期
}
