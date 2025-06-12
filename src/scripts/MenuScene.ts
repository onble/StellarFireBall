const { regClass, property } = Laya;

@regClass()
export class MenuScene extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Sprite, tips: "开始游戏按钮" })
    public btn_start: Laya.Sprite = null;

    onAwake(): void {
        this.btn_start.on(Laya.Event.CLICK, this, () => {
            Laya.Scene.open("Main.ls");
        });
    }
}
