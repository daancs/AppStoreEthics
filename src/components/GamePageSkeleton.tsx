import playerData, { Decision } from '@/backend/Model';
import Flashcard from '@/components/Flashcard';
import { Roboto_Mono } from '@next/font/google'
import AppIndicators from './AppIndicators';
import ConsequenceButton from './ConsequenceButton';
import InfoButton from './InfoButton';
import { useState } from 'react';


const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

interface GamePageSkeletonProps {
    app: playerData;
}
// TODO: Change the flash card when implemented (should be included in the interface)


/**
 * A skeleton for the structure of the game page.
 * 
 * @returns the skeleton for the game page
 */

export enum SizeChange{
  NONE,
  SMALL,
  BIG
}

export enum Displaying{
  ACCEPT_CONS,
  DECLINE_CONS,
  NO_CONS
}


export default function GamePageSkeleton( props: GamePageSkeletonProps) {

  const app = props.app;
  const noDotsVisible = [SizeChange.NONE, SizeChange.NONE, SizeChange.NONE, SizeChange.NONE];


  const [sizesToDisplay, setSizesToDisplay] = useState(noDotsVisible);

  const onHover = (display: Displaying) : void => {
    calcSizesToDisplay(display);
    console.log("Displaying " + display);
  }

  const onNotHover = () : void => {
    calcSizesToDisplay(Displaying.NO_CONS);
    console.log("Stop displaying");
  }

  // Calculate what for AppIndicator to display depending on where the player is hovering
  const calcSizesToDisplay = (display : Displaying) : void => {
     if (display === Displaying.NO_CONS){
        setSizesToDisplay(noDotsVisible);
        return;
     }

     const changeValues = display === Displaying.ACCEPT_CONS ? app.getChange(Decision.ACCEPT) : app.getChange(Decision.DECLINE);
     let sizes : SizeChange[] = [];

     for (let i=0; i<changeValues.length; i++){
        if (changeValues[i] == 0){
          sizes.push(SizeChange.NONE);
        }
        else if(Math.abs(changeValues[i]) < 25){
          sizes.push(SizeChange.SMALL);
        }
        else {
          sizes.push(SizeChange.BIG);
        }
     }

     setSizesToDisplay(sizes);
  }

  


  return (
    <>
        <div className={`grid grid-cols-3 grid-rows-6 place-items-center gap-4 w-screen h-screen justify-center bg-cover bg-center bg-primary-bg ${roboto.variable} overflow-hidden`}>
            <AppIndicators sizesToDisplay={sizesToDisplay}/>
            <div className='flex col-start-3 col-end-3 row-start-1 row-end-1'>
              <InfoButton/>
            </div>
            <div className={`flex justify-center items-center col-start-2 col-end-2 row-start-2 row-end-6 font-mono`}>
              <Flashcard appData={app.getCurrentApp()!}/>
            </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 justify-evenly items-center w-full h-full font-mono min-w-[400px]'>
              <ConsequenceButton onHover = {() => onHover(Displaying.ACCEPT_CONS)} onNotHover = {() => onNotHover()} decision={Decision.ACCEPT} app={app} link='consequence'>Decline</ConsequenceButton>
              <ConsequenceButton onHover = {() => onHover(Displaying.DECLINE_CONS)} onNotHover = {() => onNotHover()} decision={Decision.DECLINE} app={app} link='consequence'>Accept</ConsequenceButton>
            </div>
        </div>
    </>
  );
};

