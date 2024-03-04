import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn : 'root'})
export class LoadingService {
    private _loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    get loadingStatus(): boolean {
        return this._loading$.value;
    }

    set loadingStatus(value: boolean) {
        this._loading$.next(value);
    }

    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }
}