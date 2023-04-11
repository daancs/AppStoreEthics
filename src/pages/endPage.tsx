import { Roboto_Mono } from '@next/font/google'
import { NextPage } from 'next'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Playbutton from '@/components/Playbutton'
import playerData, { GameState } from '@/backend/Model'


const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })



interface GameOverProps {
    GameOver : boolean,
    Description : string
}

let messageLibrary: Map<GameState, string> = new Map([
    [GameState.WIN, "Congratulations. The company has run successfully under your management."],
    [GameState.LOSE_PRIVACY, "You are fired. You don't seem to be concerned about our users' safety."],
    [GameState.LOSE_REPUTATION, "You are fired. The reputation of our company is below zero."],
    [GameState.LOSE_CONTENTMENT, "You are fired. The users will never buy another product from us again."],
    [GameState.LOSE_REVENUE, "You are fired. The company has gone bankrupt."]
]);




const DisplayEndText : NextPage = () => {

    const router = useRouter()

    //====== States ======
    const [displayButton, setDisplayButton] = useState(false)
    const [startKeyPressed, setStartKeyPressed] = useState(false)
    const [endKeyPressed, setEndKeyPressed] = useState(false)

    // handles keypresses
    const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'y') {
          setStartKeyPressed(true)
    } else if (event.key === 'n') {
          setEndKeyPressed(true)
    }
    }
    
      // After the component is mounted, add the event listener
      useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
    }, [])

    

    // Decide what message should be displayed
    const app = playerData.getInstance();
    const tmp_desc = messageLibrary.get(app.getGameState());


    const obj:GameOverProps = {
        GameOver : true,
        Description : tmp_desc ? tmp_desc : "error" // Description="error" if value does not exist
    }

    const headline : string = obj.GameOver ? "Game Over" : "You won!";
    const desc : string = obj.Description;




    
    // Show message
    return (
        <>
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
        <div className='flex flex-col'>
          <div className={`${roboto.variable} text-4xl font-mono m-2`}>{headline}</div>
          <div className='font-mono m-2 max-w-md'>
            <TypeAnimation cursor={false} style={{whiteSpace: 'pre-line'}} speed={80} sequence={[desc, 1000,
              () => {
                setDisplayButton(true)
              }
            ]} />
            
          </div>
          <Playbutton title={"Do you want to play again?"} endPageRoute={"/thankYou"} startPageRoute={"/"} displayButton={displayButton} startKeyPressed={startKeyPressed} endKeyPressed={endKeyPressed}/>
        </div>
      </div>
            
            
        </>
    )
}

export default DisplayEndText


