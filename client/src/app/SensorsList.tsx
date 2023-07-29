import styles from "@/app/SensorsList.module.css";
import {ISensor} from "@/app/ISensor";
import {Sensor} from "@/app/Sensor";

export const SensorsList = ({sensors}: { sensors: Array<ISensor> }) => {
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