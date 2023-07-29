"use client";
import {ISensor, ISensorCommand, SensorCommand, SensorIdType} from "@/app/ISensor";
import {connection} from "@/app/ws-client";
import styles from "@/app/Sensor.module.css";

export const Sensor = ({ name, unit, value, connected, id }: ISensor) => {
    const { CONNECT, DISCONNECT } = SensorCommand

    const onClick = (sensorId: SensorIdType) => {
        const command: ISensorCommand = {
            command: connected ? DISCONNECT : CONNECT,
            id: sensorId,
        }
        connection.send(JSON.stringify(command));
    }

    return (
        <li className={styles.sensor}>
            <p>{name}</p>
            <p>{value ? `${value} ${unit}` : 'N/A'}</p>
            <button onClick={() => onClick(id)}>{connected ? DISCONNECT : CONNECT}</button>
        </li>
    )
}
