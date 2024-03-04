export interface TrafficData {
    timestamp: Date;
    statusCode: number;
    successful: boolean;
    error?: string;
}