import playerData from "@/backend/Model";
import Link from "next/link.js";
import { useRouter } from "next/router";

interface ButtonProps {
    children: React.ReactNode;
    link: string;
    bgColor?: string;
    textColor?: string;
    app: playerData;
}


/**
 * Component for a button.
 * 
 * @returns a button wich links to a page
 */
const Button = (props: ButtonProps) => {

    const router = useRouter();

    const handleClick = () => {
        props.app.nextApp()
        router.push(`/${props.link}`)
    }

    return (
        <>
            <Link href={`/${props.link}`}>
                <button onClick={() => handleClick()} className={`text-start tracking-wide w-full text-3xl rounded-xl py-2 px-8 hover:bg-slate-400 ${props.bgColor ? props.bgColor : 'bg-slate-100'} ${props.textColor ? props.textColor : 'text-black'}`}>
                    {props.children}
                </button>
            </Link>
        </>
    );
}

export default Button;