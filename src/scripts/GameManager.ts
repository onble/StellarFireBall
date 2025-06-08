import { ScorePanel } from "./ScorePanel";

const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
    declare owner: Laya.Sprite;

    @property({ type: Laya.Node, tips: "计分面板" })
    public scorePanel: Laya.Node = null;

    private _scorePanelScript: ScorePanel = null;
    private myScore: number = 0;
    private AIScore: number = 0;

    //#region 生命周期
    public onAwake(): void {
        this._scorePanelScript = this.scorePanel.getComponent(ScorePanel);
    }
    //#endregion 生命周期
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
