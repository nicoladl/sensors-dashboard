export interface ISensor {
    id: string;
    name: string;
    connected: boolean;
    unit: string;
    value: string
}

export type SensorIdType = ISensor["id"];

export enum SensorCommand {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
}

export interface ISensorCommand {
    command: SensorCommand.CONNECT | SensorCommand.DISCONNECT;
    id: string
}