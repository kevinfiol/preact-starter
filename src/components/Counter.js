import { h } from 'preact';
import Btn from './Btn';

const Counter = props => (
    <div>
        <h2 className="text-3xl">{props.num}</h2>

        <div className="text-center">
            <Btn onClick={props.increment}>Increment</Btn>
            <Btn onClick={props.decrement}>Decrement</Btn>
        </div>
    </div>
);

export default Counter;