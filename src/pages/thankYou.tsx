import { NextPage } from 'next';
import { Roboto_Mono } from '@next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })


const FinalEnd: NextPage = () => {

    const endText = {
        greeting: "Thank you for playing our game!\n\n",
        content: "We would appreciate it if you would answer some questions regarding the game :)\n\n Here's the ",
        linkText: "link"
    }

    const questionsLink = "https://forms.office.com/e/4EstD262AA​";

    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center bg-primary-bg text-white'>
                <div className='flex flex-col'>
                    <div className={`${roboto.variable} text-4xl font-mono m-2`}>{endText.greeting}</div>
                        <div className='font-mono m-2 max-w-lg whitespace-pre-line'>
                            {endText.content}
                            <a href={`${questionsLink}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{endText.linkText}</a>
                        </div>
                </div>
            </div>
        </>
    );
};

export default FinalEnd;