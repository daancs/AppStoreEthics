import React, { useState } from 'react';

interface ShortcutTooltipProps {
  shortcutText: string,
  children: any,
}

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
      {showTooltip && <span className='text-white flex absolute py-0'>
        {props.shortcutText}
      </span>}
    </div>
  );
};

export default ShortcutTooltip;
