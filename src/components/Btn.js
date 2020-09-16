import { h } from 'preact';
import { btn } from './Btn.css';

const Btn = props => (
    <button className={btn} {...props} />
);

export default Btn;