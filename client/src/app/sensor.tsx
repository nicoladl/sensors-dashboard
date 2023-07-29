"use client";
import {ISensor, ISensorCommand, SensorCommand, SensorIdType} from "@/app/ISensor";
import {connection} from "@/app/ws-client";

export default function Sensor({ name, unit, value, connected, id }: ISensor) {
    const { CONNECT, DISCONNECT } = SensorCommand

    const onClick = (sensorId: SensorIdType) => {
        const command: ISensorCommand = {
            command: connected ? DISCONNECT : CONNECT,
            id: sensorId,
        }
        connection.send(JSON.stringify(command));
    }

    return (
        <li>
            <p>{name}</p>
            <p>Unit: {unit}</p>
            <p>{value ? value : 'N/A'}</p>
            <p>{connected ? 'Connected' : 'Not connected'}</p>
            <button onClick={() => onClick(id)}>{connected ? DISCONNECT : CONNECT}</button>
        </li>
    )
}
