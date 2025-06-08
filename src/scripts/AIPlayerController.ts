const { regClass, property } = Laya;

@regClass()
export class AIPlayerController extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Sprite, tips: "足球" })
    public ball: Laya.Sprite = null;
    @property({ type: Laya.Sprite, tips: "鞋子" })
    private shoe: Laya.Sprite = null;

    private readonly minX = 1020;
    private readonly maxX = 1660;
    private readonly minJumpDistance = 200;
    private _canJump: boolean = true;
    private _rig: Laya.RigidBody = null;
    private _jumSpeed: number = -500;
    /** 上一帧X的位置 */
    private _lastX: number = 0;

    //#region 生命周期
    public onAwake(): void {
        this._rig = this.owner.getComponent(Laya.RigidBody);
    }
    public onUpdate(): void {
        console.warn(this.owner.y);
        if (this.owner.y > 765) {
            this._canJump = true;
        }
        if (this.ball.x > this.minX && this.ball.x < this.maxX) {
            this.owner.x = this.ball.x;

            // 鞋的旋转
            if (this.owner.x > this._lastX) {
                this.shoe.rotation = 23;
            } else {
                this.shoe.rotation = -23;
            }
            this._lastX = this.owner.x;

            // 判断球和AI之间的距离，跳跃
            const delX = this.owner.x - this.ball.x;
            const delY = this.owner.y - this.ball.y;
            const distance = Math.sqrt(delX * delX + delY * delY);
            if (distance < this.minJumpDistance && this._canJump) {
                console.warn("跳啊");
                this._canJump = false;
                const x = this._rig.linearVelocity.x;
                this._rig.setVelocity({ x: x, y: this._jumSpeed });
            }
        } else {
            this.shoe.rotation = 0;
        }
    }
    //#endregion 生命周期
}
