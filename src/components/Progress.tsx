interface ProgressBarProps {
  value: number;
  parentHeight: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({value, parentHeight}) => {
    const getColor = (value: number) => {
      if (value <= 0) {
        return 'red';
      } else if (value < 50) {
        return 'orange';
      } else if (value < 80) {
        return 'yellow';
      } else if (value <= 100) {
        return 'green';
      } else {
        return 'gray';
      }
    };

    /**
     * Converting tailwindcss 'h-' to px
     */
    const progressBarHeight = `${4 * (value/100) * Number(parentHeight.replace("h-",""))}px`;
  
    return (
        <div>
            <div style={{height: progressBarHeight, backgroundColor: getColor(value)}}/>
        </div>
    );
  };

export default ProgressBar;
