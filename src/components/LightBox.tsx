import { useEffect, useRef } from "react";

interface LightBoxProps {
    visible: boolean,
    cancel: any,
    children: any,
}

export const LightBox = (props: LightBoxProps) => {
    const { visible, cancel, children } = props;
    useEffect(() => {
      const checkIfClickedOutside = (event: MouseEvent) => {
        // If the modal is open and the clicked target is not within the modal, 
        //then close the modal
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
          <div className="bg-indi-red">
            <div>
              <button onClick={cancel}>close modal</button>
              {children}
            </div>
          </div>
        )}
      </>
    );
  }