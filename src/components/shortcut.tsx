import { useRouter } from "next/router";
import { useEffect } from "react";

interface ShortCutProps {
    shortCutKey: string,
    to: string,
}

export const ShortCut = (props: ShortCutProps) => {
    console.log("Shortcut component rendered");
    const { shortCutKey: key, to } = props;
    const router = useRouter();

    const handleShortCut = () => {
        // Navigate to the specified page
        router.push(to);
    };
    
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            
            if (event.key === props.shortCutKey) {
                handleShortCut();
                console.log("hi");
            }
        };

        document.addEventListener("keydown", handleKeyPress);
  
      // Cleanup the event listener
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [key, handleShortCut]);

    return null;
}