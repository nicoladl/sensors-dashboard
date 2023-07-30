"use client";
import {useEffect, useState} from "react";
import {ISensor, SensorIdType} from "@/app/ISensor";
import {connection} from "@/app/ws-client";
import {SensorsList} from "@/app/SensorsList";
import {Button} from "@/app/Button";
import './globals.css'

export default function Home() {
    const [sensors, setSensors] = useState<Array<ISensor> | []>([])
    const [isOnlyConnected, setIsOnlyConnected] = useState<boolean>(false)

    useEffect(() => {
        connection.onmessage = event => {
            const sensor: ISensor = JSON.parse(event.data)
            console.log(sensor)

            setSensors((prevSensors: Array<ISensor>) => {
                const sensorId: SensorIdType = sensor.id
                const sensorIds: Array<SensorIdType> = prevSensors.map((prevSensor: ISensor) => prevSensor.id)
                const isSensorConnected: boolean = sensorIds.includes(sensorId)

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

    const onClickConnectedSensors = () => {
        setIsOnlyConnected(!isOnlyConnected)
    }

    return (
        <>
            <h1>Sensors Dashboard</h1>
            <Button clickHandler={onClickConnectedSensors} actionLabel={'show only connected sensors'}/>
            <SensorsList sensors={sensors} isOnlyConnected={isOnlyConnected}/>
        </>
    )
}
