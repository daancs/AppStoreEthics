import Link from "next/link.js";

interface ButtonProps {
    childeren: React.ReactNode;
    link: string;
    bgColor?: string;
    textColor?: string;
}


/**
 * Component for a button.
 * 
 * @returns a button wich links to a page
 */
const Button = (props: ButtonProps) => {
    return (
        <>
            <Link href={`/${props.link}`}>
                <button className={`text-start tracking-wide w-full text-3xl rounded-xl py-2 px-8 hover:bg-slate-400 ${props.bgColor ? props.bgColor : 'bg-slate-100'} ${props.textColor ? props.textColor : 'text-black'}`}>
                    {props.childeren}
                </button>
            </Link>
        </>
    );
}

export default Button;