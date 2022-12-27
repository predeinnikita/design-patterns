import { Injectable } from "@angular/core";

export declare const ym: any;

@Injectable({
    providedIn: 'root'
})
export class YandexAnalyticsService {
    public readonly id: string = '91793814';

    public emitEvent(eventName: string): void {
        console.log(ym);
        
        ym(this.id,'reachGoal', eventName)
    }
}