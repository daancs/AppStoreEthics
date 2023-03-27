import { Roboto_Mono } from '@next/font/google'
import { NextPage } from 'next'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


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
    reviewText: "Today, you will review and decide which of the submitted applications will make it to the App Store.\n\n",
    consequencesText: "The consequences can be either negative or positive or both. It is your job to decide based on the four factors you are given. Do not let any of them run out or you lose!\n\n",
    intructionsText: "Instructions........... Done"
  }

  //====== States ======
  const [displayButton, setDisplayButton] = useState(false)
  const [startKeyPressed, setStartKeyPressed] = useState(false)
  const [endKeyPressed, setEndKeyPressed] = useState(false)
  const [autoComplete, setAutoComplete] = useState(false)
  
  // handles keypresses
  const handleKeyPress = (event: KeyboardEvent) => {
    if (!autoComplete && event.key === 'Enter' ) {
      setAutoComplete(true)
      setDisplayButton(true)
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

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
        <div className='flex flex-col'>
          <div className={`${roboto.variable} text-4xl font-mono m-2`}>App Store Ethics: The Game</div>
          <div className='font-mono m-2 max-w-md'>
            {autoComplete ? (
              <span>
                {allText.loginInfoText}
                <br/><br/>
                {allText.reviewText}
                <br/><br/>
                {allText.consequencesText}
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
                allText.loginInfoText + allText.reviewText + allText.consequencesText + allText.intructionsText,
                () => {
                  setDisplayButton(true)
                }
              ]} />
              )
            }
            
          </div>
          {displayButton && 
            <div className='font-mono'>
              <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={false} sequence={[
                "Do you want to start the game? [Y/n] \n >"
              ]}/>
              {startKeyPressed && <TypeAnimation speed={80} style={{whiteSpace: 'pre-line'}} cursor={true} sequence={[
                " y",
                2000,
                () => {
                  router.push('/game')
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

export default Home