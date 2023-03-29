export enum Stat{
    REPUTATION,
    CONTENTMENT,
    PRIVACY,
    REVENUE,
}

export enum Decision{
    ACCEPT,
    DECLINE,
}


// Representation of an app
export class App{
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

    // Gives stats and values for accept or decline
    // Ex: dummyApp1.getConsequences("accept") => [[Stat.CONTENTMENT, 10],[Stat.REVENUE, -10]]
    //     dummyApp1.getConsequences("decline") => [[Stat.PRIVACY, 10],[Stat.REVENUE, -20]]
    public getConsequences(data: Decision): [Stat, number][]{
        const tmp : [Stat, number] [] = [];
        const arr = data === Decision.ACCEPT ? this.acceptCons : this.declineCons;

        arr.forEach((element) => {
            tmp.push([element.stat, element.diff]);
        });

        return tmp;
    }
    

};


// Data for a consequence 
export class Consequence{
    readonly text: string;
    readonly stat: Stat;
    readonly diff: number;

    constructor (text: string, stat: Stat, diff: number){
        this.text = text;
        this.stat = stat;
        this.diff = diff;
    }
}