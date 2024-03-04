import { Injectable } from "@angular/core";
import { TrafficData } from "../interfaces/trafficData.interface";

@Injectable({
    providedIn: 'root',
})
export class NetworkAnalysisService {

    private _numberOfHttpCalls = 0;
    private _trafficData: TrafficData[] = [];

    constructor() {}

    addTrafficData(traffic: TrafficData) {
        this._trafficData.push(traffic);

        console.log(
            'Number of HTTP Calls:',
            this._numberOfHttpCalls,
            'Data of Error Traffic',
            this._trafficData
        );
    }

    get trafficData() {
        return this._trafficData;
    }

    addHttpCall() {
        ++this._numberOfHttpCalls;
    }
}



