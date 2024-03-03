import { useState } from "hono/jsx";
import styles from "./counter.module.css";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>{count}</p>
			<button type="button" className={styles.brown} onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	);
}
