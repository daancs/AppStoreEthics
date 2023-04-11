import { NextPage } from 'next'
import ConsequencePageSkeleton from '@/components/ConsequencePageSkeleton';
import playerData from '@/backend/Model';

const Consequences: NextPage = () => {

    const app = playerData.getInstance();

    return (
        <>
            <ConsequencePageSkeleton app={app} firstIcon={'First'} secondIcon={'Second'} thirdIcon={'Third'} fourthIcon={'Fourth'}/>
        </>
    )
}

export default Consequences