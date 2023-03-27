enum Stat{
    REPUTATION,
    CONTENTMENT,
    PRIVACY,
    REVENUE,
}


export default class AppData{
    private apps: App[] = [];

    // Create app with content and shuffle it
    public constructor (){
        const dummyApp1 = new App("mSpy", "destroy privacy", [new Consequence("A parent found their missing child", Stat.CONTENTMENT, 10),
                                                              new Consequence("Infidelity was discovered", Stat.REVENUE, -10)], 
                                                              [new Consequence("Users did not feel spied on", Stat.PRIVACY, 10),
                                                              new Consequence("No new app was released this month", Stat.REVENUE, -20)]);
        this.apps.push(dummyApp1);
        this.apps = this.shuffle(this.apps);
    }

    private shuffle (arr: any[]) {
        for (let i = arr.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1)); // 0 <= j <= i
            const tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }

        return arr;
    }

    // Returns undefined if empty
    public nextApp(){
        return (this.apps.pop());
    }


    // Gives stats and values for accept or decline
    // Ex: getConsequences(dummyApp1, "accept") => [[Stat.CONTENTMENT, 10],[Stat.REVENUE, -10]]
    //     getConsequences(dummyApp1, "decline") => [[Stat.PRIVACY, 10],[Stat.REVENUE, -20]]
    public getConsequences(app: App, data: string){
        const tmp : [Stat, number] [] = [];
        const arr = data === "accept" ? app.acceptCons : app.declineCons;

        arr.forEach((element) => {
            tmp.push([element.stat, element.diff]);
        });

        return tmp;
    }

   

}




class App{
    readonly name: string;
    readonly desc: string;
    readonly image?: any; 
    readonly acceptCons: Consequence[];
    readonly declineCons: Consequence[];

    constructor (name: string, desc: string, acceptCons: Consequence[], declineCons: Consequence[], image?:any){
        this.name = name;
        this.desc = desc;
        this.image = image ?? ""; // If no image, set empty string
        this.acceptCons = acceptCons;
        this.declineCons = declineCons;
    }
    

};


class Consequence{
    text: string;
    stat: Stat;
    diff: number;

    constructor (text: string, stat: Stat, diff: number){
        this.text = text;
        this.stat = stat;
        this.diff = diff;
    }
}