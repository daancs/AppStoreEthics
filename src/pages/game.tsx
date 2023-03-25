import GamePageSkeleton from '@/components/GamePageSkeleton';
import Head from 'next/head'
import { NextPage } from 'next'

/**
 * The first game page of the application. Here the player can see the card and flip it,
 * and either accept or decline the app. The player can also see the four factors at the top.
 * 
 * @returns the first game page
 */

const Game: NextPage = () => {

  return (
    <>
        <Head>
            <title>App Store Ethics: The Game</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GamePageSkeleton firstIcon={'First'} secondIcon={'Second'} thirdIcon={'Third'} fourthIcon={'Fourth'}/>
    </>
  );
};

export default Game;