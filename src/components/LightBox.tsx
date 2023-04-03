import { useEffect } from "react";

interface LightBoxProps {
    visible: boolean,
    cancel: any,
    children: any,
}

export const LightBox = (props: LightBoxProps) => {
    const { visible, cancel, children } = props;
    useEffect(() => {
      const checkIfClickedOutside = (event: MouseEvent) => {
        // If the lightbox is open and user clicks on the screen, 
        //then close the lightbox
        if (visible) {
          cancel();
        }
      };
  
      document.addEventListener("mousedown", checkIfClickedOutside);
  
      // Cleanup the event listener
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [visible]);
  
    return (
      <>
        {visible && (
            <div className="bg-black bg-opacity-50 absolute bottom-0 left-0 z-50 h-screen w-screen">
                {children}
            </div>
        )}
      </>
    );
  }