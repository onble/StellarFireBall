const { regClass, property } = Laya;

@regClass()
export class ScorePanel extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Text, tips: "倒计时" })
    public txt_TimeCount: Laya.Text = null;
    @property({ type: Laya.Text, tips: "玩家的得分" })
    public txt_MyScore: Laya.Text = null;
    @property({ type: Laya.Text, tips: "AI的得分" })
    public txt_AIScore: Laya.Text = null;

    //#region 生命周期
    public onAwake(): void {
        Laya.stage.on("UpdateMyScore", this, this.updateMyScoreHandler);
        Laya.stage.on("UpdateAIScore", this, this.updateAIScoreHandler);
        Laya.stage.on("UpdateTime", this, this.updateTimeHandle);
    }
    public onDestroy(): void {
        Laya.stage.off("UpdateMyScore", this, this.updateMyScoreHandler);
        Laya.stage.off("UpdateAIScore", this, this.updateAIScoreHandler);
        Laya.stage.off("UpdateTime", this, this.updateTimeHandle);
    }
    //#endregion 生命周期
    //#region 事件监听
    public updateMyScoreHandler(score: number): void {
        this.txt_MyScore.text = `${score}`;
    }
    public updateAIScoreHandler(score: number): void {
        this.txt_AIScore.text = `${score}`;
    }
    public updateTimeHandle(time: number): void {
        this.txt_TimeCount.text = `${time}`;
    }
    //#endregion 事件监听
}
