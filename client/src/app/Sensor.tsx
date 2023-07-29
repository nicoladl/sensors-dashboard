"use client";
import {ISensor} from "@/app/ISensor";
import styles from "@/app/Sensor.module.css";
import {SensorAction} from "@/app/SensorAction";

export const Sensor = ({ name, unit, value, connected, id }: ISensor) => (
    <li className={styles.sensor}>
        <p>{name}</p>
        <p>{value ? `${value} ${unit}` : 'N/A'}</p>
        <SensorAction sensorId={id} isConnected={connected}/>
    </li>
)
