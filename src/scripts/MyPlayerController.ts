const { regClass, property } = Laya;

@regClass()
export class MyPlayerController extends Laya.Script {
    declare owner: Laya.Sprite;

    private _rig: Laya.RigidBody;
    //#region 生命周期
    public onAwake(): void {
        this._rig = this.owner.getComponent(Laya.RigidBody);
    }
    //#endregion 生命周期
    //#region 事件监听
    public onKeyPress(evt: Laya.Event): void {
        if (evt.key == "a" || evt.key == "A") {
            this._rig.setVelocity({ x: -500, y: 0 });
        }
        if (evt.key == "d" || evt.key == "D") {
            console.log("d");
            this._rig.setVelocity({ x: 500, y: 0 });
        }
    }
    //#endregion 事件监听
}
