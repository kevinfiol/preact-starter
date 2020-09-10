import { h } from 'preact';
import styles from './Btn.css';

const Btn = props => (
    <button className={styles.btn} {...props} />
);

export default Btn;