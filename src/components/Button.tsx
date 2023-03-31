import Link from "next/link.js";
import { useRouter } from "next/router";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    link: string;
    shortcut: string;
    bgColor?: string;
    textColor?: string;
}


/**
 * Component for a button.
 * 
 * @returns a button wich links to a page
 */
const Button = (props: ButtonProps) => {
    const router = useRouter();
    
    // Go to link when shortcut pushed
    const handleKeyDown = () => {
        console.log("Key pressed: " + props.shortcut)
        router.push('/' + props.link);
    };


    // Add when loading page
    React.useEffect(() => {
    window.addEventListener(props.shortcut, handleKeyDown);
    
    // Removing when leaving page
    return () => {
      window.removeEventListener(props.shortcut, handleKeyDown);
    };
    }, []);

    return (
        <>
        <Link href={`/${props.link}`}>
            <button id = {props.shortcut} className={`text-start tracking-wide w-full text-3xl rounded-xl py-2 px-8 hover:bg-slate-400 ${props.bgColor ? props.bgColor : 'bg-slate-100'} ${props.textColor ? props.textColor : 'text-black'}`}>
                {props.children}
            </button>
        </Link>
        </>
    );
}

export default Button;