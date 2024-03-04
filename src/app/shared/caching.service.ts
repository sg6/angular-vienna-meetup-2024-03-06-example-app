import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class CachingService {
    private _cache = new Map<string, any>();

    getCache(key: string): any {
        if (this._cache.has(key)) {
            return this._cache.get(key);
        }
        return null;
    }

    setCache(key: string, value: any) {
        this._cache.set(key, value);
    }


}