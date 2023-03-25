interface ProgressBarProps {
  value: number;
  parentWidth: string;
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

    const progressBarHeight = ((value/100) * Number(parentHeight));
  
    return (
        <div className='h-20' style={{backgroundColor: getColor(value)}}/>
    );
  };

export default ProgressBar;
