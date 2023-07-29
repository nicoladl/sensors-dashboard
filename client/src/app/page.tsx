"use client";
import {useEffect, useState} from "react";
import Sensor from "@/app/sensor";
import {ISensor, SensorIdType} from "@/app/ISensor";
import {connection} from "@/app/ws-client";

export default function Home() {
    const [sensors, setSensors] = useState<Array<ISensor> | []>([])

    useEffect(() => {
        connection.onmessage = event => {
            const sensor: ISensor = JSON.parse(event.data)
            console.log(sensor)

            setSensors((prevSensors: Array<ISensor>) => {
                const sensorId: SensorIdType = sensor.id
                const sensorsIds: Array<SensorIdType> = prevSensors.map((sensor: ISensor) => sensor.id)
                const isSensorConnected: boolean = sensorsIds.includes(sensorId)

                if (isSensorConnected) {
                    return prevSensors.map(item => item.id === sensorId ? sensor : prevSensors[Number(item.id)])
                }

                return [...prevSensors, sensor];
            });
        };


        return () => {
            connection.close();
        };
    }, [])

    return (
        <>
            <h1>IOT sensors</h1>

            <ul>
                {sensors.map((sensor: ISensor) => (
                    <Sensor
                        key={sensor.id}
                        id={sensor.id}
                        name={sensor.name}
                        connected={sensor.connected}
                        unit={sensor.unit}
                        value={sensor.value}
                    />
                ))}
            </ul>
        </>
    )
}
