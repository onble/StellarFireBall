import { GameManager } from "./GameManager";

const { regClass, property } = Laya;

@regClass()
export class Ball extends Laya.Script {
    declare owner: Laya.Sprite;

    private _rig: Laya.RigidBody;
    private _gameManager: GameManager = null;

    //#region 生命周期
    public onAwake(): void {
        this._rig = this.owner.getComponent(Laya.RigidBody);
        this._gameManager = this.owner.parent.getComponent(GameManager);
        Laya.stage.on("StartGame", this, this.startGame);
        Laya.stage.on("GameOver", this, () => {
            Laya.SoundManager.setSoundVolume(0, "resources/sound/Goal/goal-received.wav");
            Laya.SoundManager.setSoundVolume(0, "resources/sound/startWistle.mp3");
            Laya.SoundManager.setSoundVolume(0, "resources/sound/Goal/goal-landed-01.mp3");
        });
    }
    public onDestroy(): void {
        Laya.stage.off("StartGame", this, this.startGame);
        Laya.stage.off("GameOver", this);
    }
    //#endregion 生命周期

    public startGame(): void {
        if (this._gameManager.isStartGame) {
            this._rig.type = "dynamic";
        }
    }
    reset(x: number): void {
        this.owner.x = x;
        this.owner.y = 260;
        this._rig.setVelocity({ x: 0, y: 0 });
        this._rig.angularVelocity = 0;
        this._rig.type = "kinematic";
    }
    //#region 事件监听
    public onTriggerEnter(
        other: Laya.PhysicsColliderComponent | Laya.ColliderBase,
        self?: Laya.ColliderBase,
        contact?: any
    ): void {
        if (this._gameManager.gameOver) {
            return;
        }
        if (other.owner.name === "GroundCollider") {
            Laya.SoundManager.playSound("resources/sound/Ball-Hit-Ground.wav", 1);
            if (this.owner.x < 960) {
                // left 失分
                Laya.SoundManager.playSound(
                    "resources/sound/Goal/goal-received.wav",
                    1,
                    new Laya.Handler(this, () => {
                        if (this._gameManager.gameOver) return;
                        Laya.SoundManager.playSound(
                            "resources/sound/startWistle.mp3",
                            1,
                            new Laya.Handler(this, () => {
                                Laya.stage.event("StartGame");
                            })
                        );
                    })
                );
                this.reset(752);
                Laya.stage.event("ResetMyPlayer");
            } else {
                // right 得分
                Laya.SoundManager.playSound(
                    "resources/sound/Goal/goal-landed-01.mp3",
                    1,
                    new Laya.Handler(this, () => {
                        if (this._gameManager.gameOver) return;
                        Laya.SoundManager.playSound(
                            "resources/sound/startWistle.mp3",
                            1,
                            new Laya.Handler(this, () => {
                                Laya.stage.event("StartGame");
                            })
                        );
                    })
                );
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
