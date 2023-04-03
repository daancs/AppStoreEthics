// Keeps all info about a player's stats

import {App, Stat, Decision, Consequence} from 'src/backend/contentApps';


enum GameState{
    IN_PROGRESS,
    WIN,
    LOSE_REPUTATION,
    LOSE_CONTENTMENT,
    LOSE_PRIVACY,
    LOSE_REVENUE,
}



export default class playerData{
    private reputation: number;
    private contentment: number;
    private privacy: number;
    private revenue: number;
    private gameState: GameState;
    private apps: App[]; 
    private currentApp: App | undefined;


    // Initialization
    public constructor(){
        this.reputation = 50;
        this.contentment = 50;
        this.privacy = 50;
        this.revenue = 50;
        this.gameState = GameState.IN_PROGRESS;
        this.apps = this.initApps();
        this.nextApp();
    }


    // Factory for apps at initialization
    private initApps ():App[]{
        const dummyApp1 = new App("mSpy", "destroy privacy", [new Consequence("A parent found their missing child", Stat.CONTENTMENT, 10),
                                                              new Consequence("Infidelity was discovered", Stat.REVENUE, -10)], 
                                                              [new Consequence("Users did not feel spied on", Stat.PRIVACY, 10),
                                                              new Consequence("No new app was released this month", Stat.REVENUE, -20)]);

        const app1 = new App("bargain.", "description",     [new Consequence("This app made App Store gain credibility in sustainability", Stat.REPUTATION, 50),
                                                              new Consequence("App Store increased in users", Stat.REVENUE, 50),
                                                              new Consequence("Users liked the app because they earned money from selling old things", Stat.CONTENTMENT, 50),
                                                              new Consequence("Some of the users gave out sensitive data to sellers", Stat.PRIVACY, -25)],
      
                                                              [new Consequence("App Store users could not find sustainable options for shopping", Stat.REPUTATION, -25),//reputation, revenue, contentment (-25%)
                                                              new Consequence("Potential users did not have to share sensitive data", Stat.PRIVACY, 50)], "src/images/app1_bargain.png") // Hur lägga in bild
        this.apps.push(dummyApp1);
        return this.shuffle(this.apps);
    }

    private shuffle (arr: any[]):App[]{
        for (let i = arr.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1)); // 0 <= j <= i
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }

        return arr;
    }


    // Call to get next app (will set currentApp to undefined if empty)
    public nextApp():void{
        this.currentApp = this.apps.pop();
    }

    // Takes an app with the player's decision and updates all values accordingly
    public updateStats(app: App, data: Decision) : void{
        const appData: [Stat, number][] = app.getConsequences(data);
        
        for (let i = 0; i< appData.length; i++){
            this.setValue(appData[i]);
        }

    }

    // Update the value of a stat, allowed to be neagtive but not higher than 100
    private setValue(data: [Stat, number]):void{
        const stat = data[0];
        const value = data[1];


        switch(stat){
            case Stat.REPUTATION:
                this.reputation = Math.min(this.reputation+value, 100);
                break;
            case Stat.CONTENTMENT:
                this.contentment = Math.min(this.contentment+value, 100);
                break;
            case Stat.PRIVACY:
                this.privacy = Math.min(this.privacy+value, 100);
                break;
            default:
                this.revenue = Math.min(this.revenue+value, 100);
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


    // Updates the current state of the game
    public getGameState():void{
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
    public isFinished():boolean{
        return this.gameState !== GameState.IN_PROGRESS;
    }
    

}