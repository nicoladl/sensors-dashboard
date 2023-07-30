"use client";
import styles from "@/app/SensorState.module.css";

export const SensorState = ({connected}: { connected: boolean }) => {
    const className: string = `${styles.state} ${connected ? styles.connected : styles.disconnected}`

    return (
        <div className={className}></div>
    )
}
