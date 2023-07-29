"use client";
import styles from './page.module.css'
import {ISensor} from "@/app/ISensor";

export default function Sensor(sensor: ISensor) {

    return (
        <li key={sensor.id} className={styles.card}>
            <p>{ sensor.name }</p>
            <p>Unit: { sensor.unit }</p>
            {sensor.value && <p>{ sensor.value }</p>}
            <p>{ sensor.connected ? 'connected' : 'not connected' }</p>
        </li>
    )
}
