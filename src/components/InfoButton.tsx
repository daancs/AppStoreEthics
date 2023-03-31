import { useState } from "react";
import InfoBox from "./InfoBox";
import { LightBox } from "./LightBox";

export default function InfoButton() {
    const [visible, setVisible] = useState(false);

    const openInfo = () => {
        setVisible(true);
    };

    const closeInfo = () => {
        setVisible(false);
    };

    return (
        <div>
            <button type="button" onClick={openInfo}>
                What do these symbols mean?
            </button>
            <LightBox visible={visible} cancel={closeInfo}>
                <InfoBox/>
            </LightBox>
        </div>
    )
}