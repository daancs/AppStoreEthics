import { Roboto_Mono } from '@next/font/google'
import { NextPage } from 'next'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Playbutton from '@/components/Playbutton'


const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

/**
 * The starting page of the application. Here the player can choose to start the game or not.
 * 
 * @returns the starting page
 */
const Home: NextPage =  () => {

  const router = useRouter()

  const allText ={
    loginInfoText: "Last login: Wed Feb 15 15:05:46 on console\n (base) appStoreManager@Admin-MacBook ~ %\n [sudo] password for appStoreManager: ******\n\n",
    reviewText: "Today, you will review and decide which of the submitted applications will make it to the App Store.\n\n To make an informed decision, you can read a text specification and see a visual representation of the submitted application. \n\n",
    consequencesText: "Make sure to have the four factors in mind when reviewing. Do not let any of them run out or your future at our company will be uncertain.\n\n",
    disclaimerText: "DESIGNER NOTE:\n Keep in mind while playing the game, the design is a reflection of the designers’ values. We aim to create a reflective game that will make the player gain possible insights about ethics in the field of computer science.\nBest regards, \nSix bachelor students in software engineering.",
    intructionsText: ""
  }

  //====== States ======
  const [startKeyPressed, setStartKeyPressed] = useState(false)
  const [endKeyPressed, setEndKeyPressed] = useState(false)
  const [autoComplete, setAutoComplete] = useState(false)
  
  const [disclaimer, setDisclaimer] = useState(false)
  const [displayClass, setDisplayClass] = useState('block')
  const [displayButton, setDisplayButton] = useState(false)

  // handles keypresses
  const handleKeyPress = (event: KeyboardEvent) => {
    if (!autoComplete && event.key === 'Enter' ) {
      setAutoComplete(true)
      setDisplayButton(true)
      setDisplayClass('none')
    }
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

  /**
   * This is a dumpster fire but since TypeAnimation is perma-memoized, 
   * it can NEVER re-render and thus, it needs to be this way...
   */
  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
        <div className='flex flex-col'>
          <div className={`${roboto.variable} text-4xl font-mono m-2`}>App Store Ethics: The Game</div>
          <div className='font-mono m-2 max-w-lg'>
            {autoComplete ? (
              <span>
                {allText.loginInfoText}
                <br/><br/>
                {allText.reviewText}
                <br/><br/>
                {allText.consequencesText}
                <br/><br/>
                <span className='text-rose-400'>{allText.disclaimerText}</span>
                <br/><br/>
                {allText.intructionsText}
              </span>
            ) : (
                  <TypeAnimation cursor={false} style={{whiteSpace: 'pre-line'}} speed={80} sequence={[
                    allText.loginInfoText,
                    1000,
                    allText.loginInfoText + allText.reviewText,
                    2000,
                    allText.loginInfoText + allText.reviewText + allText.consequencesText,
                    1000,
                    allText.loginInfoText + allText.reviewText + allText.consequencesText,
                    () => {
                      setDisclaimer(true)
                    }
                  ]} />
              )
            }

            {disclaimer &&
            <div style={{display: displayClass}}>
              <TypeAnimation className='text-rose-400' cursor={false} style={{whiteSpace: 'pre-line'}} speed={80} sequence={[
                allText.disclaimerText,
                1000,
                () => {
                  setDisplayButton(true)
                }
              ]}/>
            </div>
            }
          </div>
          <Playbutton title={"Do you want to start the game?"} displayButton={displayButton} startKeyPressed={startKeyPressed} endKeyPressed={endKeyPressed}/>
        </div>
      </div>
    </>
  )
}

export default Home