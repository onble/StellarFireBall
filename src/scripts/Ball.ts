const { regClass, property } = Laya;

@regClass()
export class Ball extends Laya.Script {
    declare owner: Laya.Sprite;

    private _rig: Laya.RigidBody;

    //#region 生命周期
    public onAwake(): void {
        this._rig = this.owner.getComponent(Laya.RigidBody);
        Laya.stage.on("StartGame", this, this.startGame);
    }
    public onDestroy(): void {
        Laya.stage.off("StartGame", this, this.startGame);
    }
    //#endregion 生命周期

    public startGame(): void {
        this._rig.type = "dynamic";
    }
    reset(x: number): void {
        this.owner.x = x;
        this.owner.y = 260;
        this._rig.setVelocity({ x: 0, y: 0 });
        this._rig.angularVelocity = 0;
    }
    //#region 事件监听
    public onTriggerEnter(
        other: Laya.PhysicsColliderComponent | Laya.ColliderBase,
        self?: Laya.ColliderBase,
        contact?: any
    ): void {
        if (other.owner.name === "GroundCollider") {
            if (this.owner.x < 960) {
                // left
                this.reset(752);
                Laya.stage.event("ResetMyPlayer");
            } else {
                // right
                this.reset(1170);
                Laya.stage.event("ResetAIPlayer");
            }
        }
    }
    //#endregion 事件监听
}
