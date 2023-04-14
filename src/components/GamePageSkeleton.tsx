import playerData, { Decision } from '@/backend/Model';
import Flashcard from '@/components/Flashcard';
import { Roboto_Mono } from '@next/font/google'
import AppIndicators from './AppIndicators';
import ConsequenceButton from './ConsequenceButton';
import InfoButton from './InfoButton';
import { useState } from 'react';
import { ShortCut } from './shortcut';
import ShortcutTooltip from './ShortcutTooltip';


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

  // Use to set the sizes of dots to be displayed above icons
  const noDotsVisible = [SizeChange.NONE, SizeChange.NONE, SizeChange.NONE, SizeChange.NONE];
  const [sizesToDisplay, setSizesToDisplay] = useState(noDotsVisible);

  // Triggers when hovering 'accept' or 'decline'
  const onHover = (display: Displaying) : void => {
    calcAndSetSizes(display);
  }

  // triggers when not hovering over any button
  const onNotHover = () : void => {
    calcAndSetSizes(Displaying.NO_CONS);
  }

  /* Sets and calculates the sizes of the dots, depending on if the player is hovering over 
     accept, decline or none of them
     */
  const calcAndSetSizes = (display : Displaying) : void => {
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

     return setSizesToDisplay(sizes);
  }

  


  return (
    <>  
        <ShortCut shortCutKey='a' to='/consequence'/>
        <ShortCut shortCutKey='d' to='/consequence'/>

        <div className={`grid grid-cols-3 grid-rows-6 place-items-center gap-4 w-screen h-screen justify-center bg-cover bg-center bg-primary-bg ${roboto.variable} overflow-hidden`}>
            <AppIndicators sizesToDisplay={sizesToDisplay}/>
            <div className='flex col-start-3 col-end-3 row-start-1 row-end-1'>
              <InfoButton/>
            </div>
            <div className={`flex justify-center items-center col-start-2 col-end-2 row-start-2 row-end-6 font-mono`}>
              <Flashcard appData={app.getCurrentApp()!}/>
            </div>
            <div className='flex col-start-2 col-end-2 row-start-6 row-end-6 justify-evenly items-center w-full h-full font-mono min-w-[400px]'>
              <ShortcutTooltip shortcutText='Accept A'>
                <ConsequenceButton onHover = {() => onHover(Displaying.ACCEPT_CONS)} onNotHover = {() => onNotHover()} decision={Decision.ACCEPT} app={app} link='consequence'>Accept</ConsequenceButton>
              </ShortcutTooltip>
              <ShortcutTooltip shortcutText='Decline D'>
                <ConsequenceButton onHover = {() => onHover(Displaying.DECLINE_CONS)} onNotHover = {() => onNotHover()} decision={Decision.DECLINE} app={app} link='consequence'>Decline</ConsequenceButton>
              </ShortcutTooltip>
            </div>
        </div>
    </>
  );
};

