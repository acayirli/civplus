import { useState, useId } from "react";
import styles from "./Switch.module.css";

type SwitchProps = {
	label?: string;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
};

export function Switch({
	label,
	checked,
	defaultChecked = false,
	onChange,
	disabled = false,
}: SwitchProps) {
	const [internalChecked, setInternalChecked] = useState(defaultChecked);
	const isControlled = checked !== undefined;
	const isChecked = isControlled ? checked : internalChecked;
	const id = useId();

	const toggle = () => {
		if (disabled) return;
		const next = !isChecked;
		if (!isControlled) setInternalChecked(next);
		onChange?.(next);
	};

	return (
		<div className={styles.wrapper}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}
			<button
				id={id}
				type="button"
				role="switch"
				aria-checked={isChecked}
				disabled={disabled}
				onClick={toggle}
				className={`${styles.track} ${isChecked ? styles.trackOn : ""}`}
			>
				<span className={`${styles.thumb} ${isChecked ? styles.thumbOn : ""}`} />
			</button>
		</div>
	);
}
