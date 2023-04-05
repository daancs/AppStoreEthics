import playerData, { Decision } from "@/backend/Model";
import Link from "next/link.js";

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

    const handleClick = () => {
        props.app.updateStats(props.decision)
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