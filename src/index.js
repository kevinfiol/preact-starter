import './styles/index.css';

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

import Counter from './components/Counter';

const App = () => {
    const [num, setNum] = useState(0);
    
    function increment() {
        setNum(num + 1);
    }

    function decrement() {
        setNum(num - 1);
    }

    return (
        <div className="max-width-3 mx-auto p3">
            <h1>Preact Starter</h1>
            <p>This is a sample Preact application.</p>
            <Counter
                num={num}
                increment={increment}
                decrement={decrement}
            />
        </div>
    );
};

render(<App />, document.getElementById('app'));