"use client";
import {ISensorCommand, SensorCommand, SensorIdType} from "@/app/ISensor";
import {connection} from "@/app/ws-client";
import {Button} from "@/app/Button";

export const SensorAction = ({sensorId, isConnected}: { sensorId: SensorIdType, isConnected: boolean }) => {
    const {CONNECT, DISCONNECT} = SensorCommand
    const onClick = (sensorId: SensorIdType) => {
        const command: ISensorCommand = {
            command: isConnected ? DISCONNECT : CONNECT,
            id: sensorId,
        }
        connection.send(JSON.stringify(command));
    }

    return (
        <Button clickHandler={() => onClick(sensorId)} actionLabel={isConnected ? DISCONNECT : CONNECT}/>
    )
}