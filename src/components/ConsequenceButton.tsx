import playerData, { Decision } from "@/backend/Model";
import Link from "next/link.js";
import { useRouter } from "next/router";

interface ButtonProps {
    children: React.ReactNode;
    link: string;
    decision: Decision;
    app: playerData;
}


/**
 * Component for a button.
 * 
 * @returns a button wich links to a page
 */
const ConsequenceButton = (props: ButtonProps) => {

    const router = useRouter();

    const handleClick = () => {
        props.app.updateStats(props.decision)
        router.push(`/${props.link}`)
    }

    return (
        <>
            <Link href={`/${props.link}`}>
                <button onClick={() => handleClick()} className={`text-start tracking-wide w-full text-3xl rounded-xl py-2 px-8 hover:bg-slate-400 bg-slate-100 text-black`}>
                    {props.children}
                </button>
            </Link>
        </>
    );
}

export default ConsequenceButton;