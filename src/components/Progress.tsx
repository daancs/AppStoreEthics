interface ProgressBarProps {
  value: number;
  parentHeight: string;
  gamePage?: boolean;
  isChangePos?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({value, parentHeight, gamePage, isChangePos}) => {
    const getColor = () => {
      if (gamePage) {
        return '#00A1FC'; // blue
      } else if (isChangePos) {
        return '#11F11A'; // green
      } else if (!isChangePos) {
        return '#FB0A18'; // red
      } else {
        return 'gray'; // something is wrong, display gray color
      }
    };

    /**
     * Converting tailwindcss 'h-' to px
     */
    const progressBarHeight = `${4 * (value/100) * Number(parentHeight.replace("h-",""))}px`;
  
    return (
        <div>
            <div style={{height: progressBarHeight, backgroundColor: getColor()}}/>
        </div>
    );
  };

export default ProgressBar;
