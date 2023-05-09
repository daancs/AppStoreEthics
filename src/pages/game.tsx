import playerData from '@/backend/Model';
import GamePageSkeleton from '@/components/GamePageSkeleton';
import { useRouter } from 'next/router';

/**
 * The first game page of the application. Here the player can see the card and flip it,
 * and either accept or decline the app. The player can also see the four factors at the top.
 * 
 * @returns the first game page
 */

const Game = () => {

  const app = playerData.getInstance();
  const router = useRouter();
  
  
  // If the game is over, the end page is loaded
  if (app.isFinished()) {
    console.log('game ended');
    router.push('/endPage');
  } 

  
  return (
    <>
      <GamePageSkeleton app={app} />
    </>
  );
}


export default Game;