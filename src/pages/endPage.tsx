import { NextPage } from "next";


enum CardinalDirections {
    North,
    East,
    South,
    West
}


interface GameOverProps {
    GameOver : boolean,
    Description : string
}

/*
function EndText(props : GameOverProps) {
    return (
        <h1>Hello end!</h1>
    )
}
*/



const DisplayEndText : NextPage = () => {
    const obj:GameOverProps = {
        GameOver : true,
        Description : "blablabla"
    }
    const headline:string = obj.GameOver ? "You lost." : "You won!";
    const desc : string = obj.Description;
    
    

    return (
        <>
        <div>
            <div className="text-center">{headline}</div>
            <div className="text-center">{desc}</div>
        </div>
        </>
    )
}

export default DisplayEndText


