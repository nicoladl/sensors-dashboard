"use client";
import styles from './page.module.css'
import {useEffect, useState} from "react";
import Sensor from "@/app/sensor";
import {ISensor} from "@/app/ISensor";

const WSURL: string = 'ws://localhost:5001';

export default function Home() {
    const [sensors, setSensors] = useState<Array<ISensor> | []>([])

    const connection: WebSocket = new WebSocket(WSURL);

    useEffect(() => {
        connection.onmessage = event => {
            const sensor: ISensor = JSON.parse(event.data)
            setSensors((prevMessages: Array<ISensor>) => [...prevMessages, sensor]);
        };
    }, [])

    return (
        <div className={styles.main}>
            <h1>IOT sensors</h1>

            <ul>
                {sensors.map((sensor: ISensor) => (
                    <Sensor sensor={sensor} />
                ))}
            </ul>
        </div>
    )
}
