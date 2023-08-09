import {ISensor} from "@/app/ISensor";
import {Sensor} from "@/app/Sensor";
import styles from "@/app/SensorsList.module.css";

export const SensorsList = ({sensors}: { sensors: Array<ISensor> }) => {
    // todo: add empty state

    console.log(sensors)
    return (
        <ul className={styles.sensorsList}>
            {sensors.map((sensor: ISensor) => (
                <Sensor
                    key={sensor.id}
                    {...sensor}
                />
            ))}
        </ul>
    )
}