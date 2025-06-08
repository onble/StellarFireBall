const { regClass, property } = Laya;

@regClass()
export class Ball extends Laya.Script {
    declare owner: Laya.Sprite;

    reset(x: number): void {
        this.owner.x = x;
        this.owner.y = 260;
        const rig = this.owner.getComponent(Laya.RigidBody);
        rig.setVelocity({ x: 0, y: 0 });
        rig.angularVelocity = 0;
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
            } else {
                // right
                this.reset(1170);
            }
        }
    }
    //#endregion 事件监听
}
