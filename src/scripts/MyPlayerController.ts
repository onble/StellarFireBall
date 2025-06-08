import { GameManager } from "./GameManager";

const { regClass, property } = Laya;

@regClass()
export class MyPlayerController extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Sprite, tips: "鞋子" })
    private shoe: Laya.Sprite = null;

    private _rig: Laya.RigidBody;
    /** 控制连跳 */
    private _canJump: boolean = true;
    //#region 生命周期
    public onAwake(): void {
        this._rig = this.owner.getComponent(Laya.RigidBody);
        Laya.stage.on("ResetMyPlayer", this, this._resetHandle);
    }
    public onUpdate(): void {
        if (this.owner.y > 765) {
            this._canJump = true;
        }
        this._rotationShoe();
    }
    public onDestroy(): void {
        Laya.stage.off("ResetMyPlayer", this, this._resetHandle);
    }
    //#endregion 生命周期
    /**
     * 旋转鞋子
     */
    private _rotationShoe() {
        // 向右
        if (this._rig.linearVelocity.x > 0.1) {
            this.shoe.rotation = 23;
        } else if (this._rig.linearVelocity.x < -0.1) {
            // 向左
            this.shoe.rotation = -23;
        } else {
            // 停止
            this.shoe.rotation = 0;
        }
    }
    private _resetHandle(): void {
        this.owner.parent.getComponent(GameManager).AddAIScore();
        this.owner.x = 660;
        this.owner.y = 770;
        this._rig.setVelocity({ x: 0, y: 0 });
    }
    //#region 事件监听
    public onKeyPress(evt: Laya.Event): void {
        if (evt.key == "a" || evt.key == "A") {
            const y = this._rig.linearVelocity.y;
            this._rig.setVelocity({ x: -500, y: y });
        }
        if (evt.key == "d" || evt.key == "D") {
            const y = this._rig.linearVelocity.y;
            this._rig.setVelocity({ x: 500, y: y });
        }
        if (evt.key == " " && this._canJump) {
            this._canJump = false;
            const x = this._rig.linearVelocity.x;
            this._rig.setVelocity({ x: x, y: -550 });
        }
    }
    //#endregion 事件监听
}
