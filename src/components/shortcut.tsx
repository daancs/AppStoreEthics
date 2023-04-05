import { useRouter } from "next/router";
import { useEffect } from "react";

interface ShortCutProps {
    shortCutKey: string,
    to?: string,
    onDo?: () => void,
}

export const ShortCut = (props: ShortCutProps) => {
    const { shortCutKey: key, to, onDo } = props;
    const router = useRouter();

    const handleShortCut = () => {
        // Do something
        if (onDo) {
            onDo();
            return;
        } 
        // Navigate to the specified page
        if (to) {
            router.push(to);
        }
    };
    
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            
            if (event.key === props.shortCutKey) {
                handleShortCut();
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