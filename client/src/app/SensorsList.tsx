import {ISensor} from "@/app/ISensor";
import {Sensor} from "@/app/Sensor";
import styles from "@/app/SensorsList.module.css";

export const SensorsList = ({sensors, isOnlyConnected}: { sensors: Array<ISensor>, isOnlyConnected: boolean }) => {
    // todo: add empty state
    return (
        <ul className={styles.sensorsList}>
            {sensors.map((sensor: ISensor) => (
                (!isOnlyConnected || sensor.connected) && (
                    <Sensor
                        key={sensor.id}
                        {...sensor}
                    />
                )
            ))}
        </ul>
    )
}