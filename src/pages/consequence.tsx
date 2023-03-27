import { NextPage } from 'next'
import ConsequencePageSkeleton from '@/components/ConsequencePageSkeleton';

const Consequences: NextPage = () => {
    return (
        <>
            <ConsequencePageSkeleton firstIcon={'First'} secondIcon={'Second'} thirdIcon={'Third'} fourthIcon={'Fourth'}/>
        </>
    )
}

export default Consequences