import { ScorePanel } from "./ScorePanel";

const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Node, tips: "计分面板" })
    public scorePanel: Laya.Node = null;

    @property({ type: Laya.Sprite, tips: "游戏结束面板" })
    private gameOverPanel: Laya.Sprite = null;

    @property({ type: Laya.Sprite, tips: "游戏暂停面板" })
    private pausePanel: Laya.Sprite = null;

    @property({ type: Laya.Sprite, tips: "游戏暂停按钮" })
    private btn_pause: Laya.Sprite = null;

    @property({ type: Laya.Image, tips: "倒计时" })
    private countDown: Laya.Image = null;

    @property({ type: Laya.Image, tips: "天空背景" })
    private skyBackground: Laya.Image = null;

    @property({ type: Laya.Image, tips: "体育场背景" })
    private stadiumBackground: Laya.Image = null;

    @property({ type: Laya.Image, tips: "场地" })
    private fieldBackground: Laya.Image = null;

    private _scorePanelScript: ScorePanel = null;
    private myScore: number = 0;
    private AIScore: number = 0;
    private _timer: number = 0;
    private _time: number = 3;
    public isStartGame: boolean = false;
    /** 比赛倒计时 */
    private _countDownTime: number = 90;
    /** 游戏是否结束 */
    public gameOver: boolean = false;

    //#region 生命周期
    public onAwake(): void {
        Laya.SoundManager.playMusic("resources/sound/Crowd/crowd-01.mp3", 0);
        // 白天黑夜随机
        const randomTime = Math.floor(this.getRandom(1, 3));
        switch (randomTime) {
            case 1:
                this.skyBackground.skin = "resources/Textures/Background/sky_day.jpg";
                this.stadiumBackground.skin = "resources/Textures/Background/stadium-02.png";
                break;
            case 2:
                this.skyBackground.skin = "resources/Textures/Background/sky_night.jpg";
                this.stadiumBackground.skin = "resources/Textures/Background/stadium-01.png";
                break;
        }
        const randomField = Math.floor(this.getRandom(1, 4));
        this.fieldBackground.skin = `resources/Textures/Background/field-0${randomField}.png`;
        // 游戏结束界面两个按钮的点击事件的监听
        this.gameOverPanel.getChildByName("btn_menu").on(Laya.Event.CLICK, this, () => {
            // 场景的跳转
            Laya.Scene.open("Menu.ls");
        });
        this.gameOverPanel.getChildByName("btn_again").on(Laya.Event.CLICK, this, () => {
            // 重新加载当前场景
            Laya.Scene.open("Main.ls");
        });
        this.btn_pause.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            this.pausePanel.visible = true;
            Laya.timer.scale = 0;
        });
        // 暂停界面三个按钮的点击事件监听
        this.pausePanel.getChildByName("btn_menu").on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            Laya.Scene.open("Menu.ls");
            Laya.timer.scale = 1;
        });
        this.pausePanel.getChildByName("btn_resume").on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            this.pausePanel.visible = false;
            Laya.timer.scale = 1;
        });
        this.pausePanel.getChildByName("btn_restart").on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/sound/MenuTap.mp3", 1);
            Laya.Scene.open("Main.ls");
            Laya.timer.scale = 1;
        });
        this._scorePanelScript = this.scorePanel.getComponent(ScorePanel);
    }
    public onUpdate(): void {
        if (this.isStartGame === false) {
            this._timer += Laya.timer.delta / 1000;
            if (this._timer >= 1) {
                this._timer = 0;
                this._time--;
                if (this._time <= 0) {
                    this.isStartGame = true;
                    this.countDown.visible = false;
                    this.startGame();
                    return;
                }
                this.countDown.skin = `resources/Textures/Buttons/count-${this._time}.png`;
                this.countDown.visible = true;
            }
        } else if (this.gameOver === false) {
            this._timer += Laya.timer.delta / 1000;
            if (this._timer > 1) {
                this._timer = 0;
                this._countDownTime--;
                this._scorePanelScript.updateTime(this._countDownTime);
                if (this._countDownTime <= 0) {
                    // 游戏结束
                    this.gameOver = true;
                    this._gameOver();
                }
            }
        }
    }
    private _gameOver(): void {
        this.gameOverPanel.visible = true;
        Laya.stage.event("GameOver");
        const txt_result = this.gameOverPanel.getChildByName("txt_result") as Laya.Text;
        if (this.myScore > this.AIScore) {
            txt_result.text = "胜利";
        } else if (this.myScore < this.AIScore) {
            txt_result.text = "失败";
        } else {
            txt_result.text = "平局";
        }
    }
    //#endregion 生命周期
    public startGame(): void {
        this.btn_pause.visible = true;
        Laya.SoundManager.playSound(
            "resources/sound/startWistle.mp3",
            1,
            new Laya.Handler(this, () => {
                Laya.stage.event("StartGame");
            })
        );
    }
    //#region 事件监听
    public AddMyScore(): void {
        this.myScore++;
        this._scorePanelScript.updateMyScore(this.myScore);
    }
    public AddAIScore(): void {
        this.AIScore++;
        this._scorePanelScript.updateAIScore(this.AIScore);
    }
    //#endregion 事件监听
    /**
     * 获取指定范围内的随机数
     * @param min 最小值（包含）
     * @param max 最大值（不包含）
     * @returns 返回min到max之间的随机数
     */
    private getRandom(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}
