import { Roboto_Mono } from '@next/font/google'
import { NextPage } from 'next'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

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

    
    const obj:GameOverProps = {
        GameOver : true,
        Description : "You are fired. You don't seem to be concerned about our users' safety."
    }
    const headline : string = obj.GameOver ? "Game Over" : "You won!";
    const desc : string = obj.Description;
    

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
          {displayButton && 
            <div className='font-mono'>
              <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={false} sequence={[
                "Do you want to play again? [Y/n] \n >"
              ]}/>
              {startKeyPressed && <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={true} sequence={[
                " y",
                2000,
                () => {
                  router.push('/')
                }
              ]}/>}
              {endKeyPressed && <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={true} sequence={[
                " n",
                2000,
                () => {
                  router.reload()
                }
                ]}/>}
            </div>
          }
        </div>
      </div>
            
            
        </>
    )
}

export default DisplayEndText


