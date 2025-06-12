import { ScorePanel } from "./ScorePanel";

const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Node, tips: "计分面板" })
    public scorePanel: Laya.Node = null;

    @property({ type: Laya.Text, tips: "倒计时" })
    public txt_countDown: Laya.Text = null;

    @property({ type: Laya.Sprite, tips: "游戏结束面板" })
    private gameOverPanel: Laya.Sprite = null;

    private _scorePanelScript: ScorePanel = null;
    private myScore: number = 0;
    private AIScore: number = 0;
    private _timer: number = 0;
    private _time: number = 3;
    private _isStartGame: boolean = false;
    /** 比赛倒计时 */
    private _countDownTime: number = 10;
    /** 游戏是否结束 */
    public gameOver: boolean = false;

    //#region 生命周期
    public onAwake(): void {
        this._scorePanelScript = this.scorePanel.getComponent(ScorePanel);
    }
    public onUpdate(): void {
        if (this._isStartGame === false) {
            this._timer += Laya.timer.delta / 1000;
            if (this._timer >= 1) {
                this._timer = 0;
                this._time--;
                if (this._time <= 0) {
                    this._isStartGame = true;
                    this.txt_countDown.visible = false;
                    this.startGame();
                    return;
                }
                this.txt_countDown.text = `${this._time}`;
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
                    this.gameOverPanel.visible = true;
                    Laya.stage.event("GameOver");
                }
            }
        }
    }
    //#endregion 生命周期
    public startGame(): void {
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
}
