const { regClass, property } = Laya;

const HEAD_MAX_INDEX = 4;
@regClass()
export class MenuScene extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Sprite, tips: "开始游戏按钮" })
    public btn_start: Laya.Sprite = null;
    @property({ type: Laya.Sprite, tips: "向左切换按钮" })
    public btn_left: Laya.Sprite = null;
    @property({ type: Laya.Sprite, tips: "向右切换按钮" })
    public btn_right: Laya.Sprite = null;
    @property({ type: Laya.Image, tips: "头像节点" })
    public img_head: Laya.Image = null;

    /**
     * 头像索引
     * 范围1-4
     */
    private _headIndex: number = 1;

    onAwake(): void {
        // 先获取一下本地存放的HeadIndx的值
        this._headIndex = Number(Laya.LocalStorage.getItem("HeadIndex") || 1);
        this.img_head.skin = `resources/Textures/Players/Player-Head-0${this._headIndex}-n.png`;
        this.btn_start.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            Laya.LocalStorage.setItem("HeadIndex", `${this._headIndex}`);
            Laya.Scene.open("Main.ls");
        });
        this.btn_left.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            this._headIndex--;
            if (this._headIndex < 1) {
                this._headIndex = HEAD_MAX_INDEX;
            }
            this.img_head.skin = `resources/Textures/Players/Player-Head-0${this._headIndex}-n.png`;
        });
        this.btn_right.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            this._headIndex++;
            if (this._headIndex > HEAD_MAX_INDEX) {
                this._headIndex = 1;
            }
            this.img_head.skin = `resources/Textures/Players/Player-Head-0${this._headIndex}-n.png`;
        });
    }
}
