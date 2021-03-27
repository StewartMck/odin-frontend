import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function AnimalCounter() {
    const percentage = 60;
    return (
        <div style={{width:100, height:100}}>
            <CircularProgressbar value={percentage} text={`adoption ${percentage}%`} />
        </div>
    )
};