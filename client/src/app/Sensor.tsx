"use client";
import {ISensor} from "@/app/ISensor";
import {SensorAction} from "@/app/SensorAction";
import {SensorState} from "@/app/SensorState";
import styles from "@/app/Sensor.module.css";

export const Sensor = ({ name, unit, value, connected, id }: ISensor) => (
    <li className={styles.sensor}>
        <div className={styles.sensorName}>
            <h2>{name}</h2>
            <SensorState connected={connected}/>
        </div>
        <div className={styles.sensorValue}>{`${value ? value : 'N/A'} ${unit}`}</div>
        <SensorAction sensorId={id} isConnected={connected}/>
    </li>
)
