import playerData from '@/backend/Model';
import GamePageSkeleton from '@/components/GamePageSkeleton';
import { NextPage } from 'next'
import { useRouter } from 'next/router';

/**
 * The first game page of the application. Here the player can see the card and flip it,
 * and either accept or decline the app. The player can also see the four factors at the top.
 * 
 * @returns the first game page
 */

const Game: NextPage = () => {

  const app = playerData.getInstance();
  const router = useRouter()

  if (app.getCurrentApp() === undefined) {
      router.push('/endPage')
  }

  return (
    <>
        <GamePageSkeleton app={app}/>
    </>
  );
};

export default Game;