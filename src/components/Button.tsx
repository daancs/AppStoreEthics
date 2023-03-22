import Link from "next/link.js";

interface ButtonProps {
    childeren: React.ReactNode;
    link: string;
}

const Button = (props: ButtonProps) => {
    return (
        <>
            <Link href={`/${props.link}`}>
                <button className="text-black text-start tracking-wide w-full text-3xl rounded-xl py-2 px-8 bg-white hover:bg-gray-400">
                    {props.childeren}
                </button>
            </Link>
        </>
    );
}

export default Button;