import playerData from "@/backend/Model";
import Link from "next/link.js";
import { useRouter } from "next/router";
import { ShortCut } from "./Shortcut";

interface ButtonProps {
    children: React.ReactNode;
    link: string;
    bgColor?: string;
    textColor?: string;
    app: playerData;
    shortcutKey: string;
}


/**
 * Component for a button.
 * To be used when the player presses 'continue' on the consqeuence page
 * @returns a button wich links to a page
 */
const ContinueButton = (props: ButtonProps) => {

    const router = useRouter();

    const handleClick = () => {
        props.app.nextApp()
        router.push(`/${props.link}`)
    }

    return (
        <>
            <ShortCut shortCutKey={props.shortcutKey} onDo={handleClick}/>
            <Link href={`/${props.link}`}>
                <button onClick={() => handleClick()} className={`text-start tracking-wide w-full text-3xl rounded-xl py-2 px-8 hover:bg-slate-400 ${props.bgColor ? props.bgColor : 'bg-slate-100'} ${props.textColor ? props.textColor : 'text-black'}`}>
                    {props.children}
                </button>
            </Link>
        </>
    );
}

export default ContinueButton;