import { GameManager } from "./GameManager";

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
    private offestX: number = 0;
    /** 游戏管理器 */
    private _gameManager: GameManager = null;
    private _img_head: Laya.Image = null;
    private _headIndex: number = 1;

    //#region 生命周期
    public onAwake(): void {
        this._img_head = this.owner.getChildByName("head") as Laya.Image;
        this._headIndex = Math.floor(this.getRandom(1, 5));
        const skinUrl = `resources/Textures/Players/Player-Head-0${this._headIndex}-n.png`;
        this._img_head.skin = skinUrl;

        this._rig = this.owner.getComponent(Laya.RigidBody);
        this._gameManager = this.owner.parent.getComponent(GameManager);
        Laya.stage.on("ResetAIPlayer", this, this._resetHandle);
    }
    public onUpdate(): void {
        if (this._gameManager.gameOver) {
            this.shoe.rotation = 0;
            return;
        }
        if (this.owner.y > 765) {
            this._canJump = true;
        }
        if (this.ball.x > this.minX && this.ball.x < this.maxX) {
            const targetX = this.ball.x + this.offestX;
            this.owner.x = Laya.MathUtil.lerp(this.owner.x, targetX, (Laya.timer.delta / 1000) * 5);

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
                this._canJump = false;
                const x = this._rig.linearVelocity.x;
                const y = this._jumSpeed + this.getRandom(50, 250);
                this._rig.setVelocity({ x: x, y: this._jumSpeed });
            }
        } else {
            this.shoe.rotation = 0;
            this.offestX = this.getRandom(20, 50);
        }
    }
    public onDestroy(): void {
        Laya.stage.off("ResetAIPlayer", this, this._resetHandle);
    }
    //#endregion 生命周期

    /**
     * 获取指定范围内的随机数
     * @param min 最小值（包含）
     * @param max 最大值（不包含）
     * @returns 返回min到max之间的随机数
     */
    private getRandom(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    /**
     * 重置AI玩家位置
     */
    private _resetHandle(): void {
        this._gameManager.AddMyScore();
        this.owner.x = 1260;
        this.owner.y = 770;
        this._rig.setVelocity({ x: 0, y: 0 });
    }

    //#region 事件监听

    onTriggerEnter(
        other: Laya.PhysicsColliderComponent | Laya.ColliderBase,
        self?: Laya.ColliderBase,
        contact?: any
    ): void {
        if (other.owner.name === "Ball") {
            Laya.timer.clearAll(this);
            const skinUrl = `resources/Textures/Players/Player-Head-0${this._headIndex}-c.png`;
            this._img_head.skin = skinUrl;
            Laya.timer.once(1000, this, () => {
                const skinUrl = `resources/Textures/Players/Player-Head-0${this._headIndex}-n.png`;
                this._img_head.skin = skinUrl;
            });
        }
    }

    //#endregion 事件监听
}
