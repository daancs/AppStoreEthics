import React, { useState } from 'react';

interface ShortcutTooltipProps {
  shortcutText: string,
  children?: React.ReactNode,
  consIcon?: boolean,
}

/**
 * Component can be used to provide information about how to perform shortcuts
 */
const ShortcutTooltip = (props: ShortcutTooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.children}
      {showTooltip && <span className={`text-white absolute flex py-0 ${props.consIcon ? 'hidden' : ''}`}>
        {props.shortcutText}
      </span>}
    </div>
  );
};

export default ShortcutTooltip;
