import styles from "@/app/Button.module.css";

export const Button = ({clickHandler, actionLabel}: {
    clickHandler: () => void,
    actionLabel: string
}) => (
    <button
        className={styles.action}
        onClick={clickHandler}
    >
        {actionLabel}
    </button>
)