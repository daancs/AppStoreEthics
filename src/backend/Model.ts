// Keeps all info about a player's consequences
import { IApp, IConsequence } from './content/IApp';
import getData from './content/Content';

enum GameState{
    IN_PROGRESS,
    WIN,
    LOSE_REPUTATION,
    LOSE_CONTENTMENT,
    LOSE_PRIVACY,
    LOSE_REVENUE,
}

enum Stat{
    REPUTATION,
    CONTENTMENT,
    PRIVACY,
    REVENUE,
}

export enum Decision{
    ACCEPT,
    DECLINE,
}



export default class playerData{

    static instance: playerData;
    
    static getInstance() {
        if (playerData.instance) {
            return playerData.instance;
        } else {
            playerData.instance = new playerData();
            return playerData.instance;
        }
    }

    private reputation: number;
    private contentment: number;
    private privacy: number;
    private revenue: number;
    private gameState: GameState;
    private apps: IApp[]; 
    private currentApp : IApp | undefined;


    // Initialization
    private constructor(){
        this.reputation = 50;
        this.contentment = 50;
        this.privacy = 50;
        this.revenue = 50;
        this.gameState = GameState.IN_PROGRESS;
        this.apps = this.initApps();
        this.nextApp();
    }


    // Get data from Content.ts and shuffle it
    private initApps (): IApp[]{
        const data : IApp[] = getData();
        return this.shuffle(data);
    }

    private shuffle (arr: any[]): any[]{
        for (let i = arr.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1)); // 0 <= j <= i
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }

        return arr;
    }


    // Call to get next app (will set currentApp to undefined if empty)
    public nextApp(): void{
        this.currentApp = this.apps.pop();
    }

    // Takes the player's decision and updates all values accordingly using the current app
    public updateStats(decision : Decision): void{

        // Set variable to hold the correct consequences depending on the decision
        const consequences : IConsequence[] | undefined = decision === Decision.ACCEPT ? this.currentApp?.accept_cons : this.currentApp?.decline_cons;

        // Happens if list of apps is empty i.e. the game is won
        if (consequences === undefined){
            return;
        }

        // Update value for all stats
        this.calcAndUpDateValue(Stat.REPUTATION, consequences);
        this.calcAndUpDateValue(Stat.CONTENTMENT, consequences);
        this.calcAndUpDateValue(Stat.PRIVACY, consequences);
        this.calcAndUpDateValue(Stat.REVENUE, consequences);
    }


    // Calculates and updates the value of a stat from a list of consequences
    private calcAndUpDateValue(stat: Stat, arr: IConsequence[]): void{
        const value = this.calcValue(stat, arr);
        this.updateValue(stat, value);
    }


    // Adds together all points of a stat from a list of consequences
    private calcValue(stat: Stat, arr: IConsequence[]): number{
        let sum = 0;

        for (let i=0; i<arr.length; i++){
            const cons = arr[i];
            switch(stat){
                case Stat.REPUTATION:
                    sum+=cons.reputation || 0;
                    break;
                case Stat.CONTENTMENT:
                    sum+=cons.contentment || 0;
                    break;
                case Stat.PRIVACY:
                    sum+=cons.privacy || 0;
                    break;
                default:
                    sum+=cons.revenue || 0;
            }
        }

        return sum;
    }

    // Updates value according to stat, upper limit is 100
    private updateValue(stat: Stat, value = 0): void{
        switch(stat){
            case Stat.REPUTATION:
                this.reputation = Math.min(100, this.reputation+value);
                return;
            case Stat.CONTENTMENT:
                this.contentment = Math.min(100, this.contentment+value);
                return;
            case Stat.PRIVACY:
                this.privacy = Math.min(100, this.privacy+value);
                return;
            default:
                this.revenue = Math.min(100,this.revenue+value);
        }
    }

    


    // Getters
    public getReputation():number{
        return this.reputation;
    }

    public getContentment():number{
        return this.contentment;
    }

    public getPrivacy():number{
        return this.privacy;
    }

    public getRevenue():number{
        return this.revenue;
    }

    public getConsequences(decision : Decision): IConsequence[] | undefined{
        const consequences : IConsequence[] | undefined = decision === Decision.ACCEPT ? this.currentApp?.accept_cons : this.currentApp?.decline_cons;
        return consequences;
    }

    public getCurrentApp(): IApp | undefined {
        return this.currentApp;
    }


    // Updates the current state of the game
    public getGameState(): void{
        if (this.reputation <= 0){
            this.gameState = GameState.LOSE_REPUTATION;
        }
        else if (this.contentment <= 0){
            this.gameState = GameState.LOSE_CONTENTMENT;
        }
        else if (this.privacy <= 0){
            this.gameState = GameState.LOSE_PRIVACY;
        }
        else if (this.revenue <= 0){
            this.gameState = GameState.LOSE_REVENUE;
        }
        else if (this.apps.length === 0){
            this.gameState = GameState.WIN;
        }
        else {
            this.gameState = GameState.IN_PROGRESS;
        }
    }

    // Returns true if game is over 
    public isFinished(): boolean{
        return this.gameState !== GameState.IN_PROGRESS;
    }
    

}