import { GameManager } from "./GameManager";

const { regClass, property } = Laya;

@regClass()
export class MyPlayerController extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Sprite, tips: "鞋子" })
    private shoe: Laya.Sprite = null;

    @property({ type: Laya.Sprite, tips: "左移按钮" })
    private btn_left: Laya.Sprite = null;

    @property({ type: Laya.Sprite, tips: "右移按钮" })
    private btn_right: Laya.Sprite = null;

    @property({ type: Laya.Sprite, tips: "跳跃按钮" })
    private btn_jump: Laya.Sprite = null;

    private _rig: Laya.RigidBody;
    /** 控制连跳 */
    private _canJump: boolean = true;
    /** 游戏控制器 */
    private _gameManager: GameManager = null;
    private _canLeft: boolean = false;
    private _canRight: boolean = false;

    //#region 生命周期
    public onAwake(): void {
        this._rig = this.owner.getComponent(Laya.RigidBody);
        this._gameManager = this.owner.parent.getComponent(GameManager);
        Laya.stage.on("ResetMyPlayer", this, this._resetHandle);
        this.btn_left.on(Laya.Event.MOUSE_OVER, this, () => {
            this._canLeft = true;
        });
        this.btn_left.on(Laya.Event.MOUSE_UP, this, () => {
            this._canLeft = false;
        });
        this.btn_left.on(Laya.Event.MOUSE_OUT, this, () => {
            this._canLeft = false;
        });
        this.btn_right.on(Laya.Event.MOUSE_OVER, this, () => {
            this._canRight = true;
        });
        this.btn_right.on(Laya.Event.MOUSE_UP, this, () => {
            this._canRight = false;
        });
        this.btn_right.on(Laya.Event.MOUSE_OUT, this, () => {
            this._canRight = false;
        });
        this.btn_jump.on(Laya.Event.CLICK, this, this._jump);
    }
    public onUpdate(): void {
        if (this.owner.y > 765) {
            this._canJump = true;
        }
        if (this._canLeft) {
            this._moveLeft();
        }
        if (this._canRight) {
            this._moveRight();
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
        this._gameManager.AddAIScore();
        this.owner.x = 660;
        this.owner.y = 770;
        this._rig.setVelocity({ x: 0, y: 0 });
    }
    //#region 事件监听
    public onKeyPress(evt: Laya.Event): void {
        if (this._gameManager.gameOver) return;
        if (evt.key == "a" || evt.key == "A") {
            this._moveLeft();
        }
        if (evt.key == "d" || evt.key == "D") {
            this._moveRight();
        }
        if (evt.key == " ") {
            this._jump();
        }
    }
    private _moveLeft(): void {
        const y = this._rig.linearVelocity.y;
        this._rig.setVelocity({ x: -500, y: y });
    }
    private _moveRight(): void {
        const y = this._rig.linearVelocity.y;
        this._rig.setVelocity({ x: 500, y: y });
    }
    private _jump(): void {
        if (this._canJump === false) {
            return;
        }
        this._canJump = false;
        const x = this._rig.linearVelocity.x;
        this._rig.setVelocity({ x: x, y: -550 });
    }
    //#endregion 事件监听
}
