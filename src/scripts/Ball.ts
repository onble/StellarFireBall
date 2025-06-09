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
            Laya.SoundManager.playSound("resources/sound/Ball-Hit-Ground.wav", 1);
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
        switch (other.owner.name) {
            case "MyPlayer":
                Laya.SoundManager.playSound("resources/sound/BallHit-01.mp3", 1);
                break;
            case "AIPlayer":
                Laya.SoundManager.playSound("resources/sound/BallHit-02.mp3", 1);
                break;
            case "middlePole":
                Laya.SoundManager.playSound("resources/sound/ballHitsMiddlePole.mp3", 1);
                break;
        }
    }
    //#endregion 事件监听
}
