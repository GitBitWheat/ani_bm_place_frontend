import './timer.css';

const Timer = ({ isTimerRunning, minutes, seconds }) => {
    const timerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    const style = isTimerRunning ? {} : { display: 'none' };

    return (
        <div className="game-timer" style={style}>
            {timerText}
        </div>
    );
};

export default Timer;