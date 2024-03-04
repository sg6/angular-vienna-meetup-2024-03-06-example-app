import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class CachingService {
    private _cache = new Map<
        string,
        {response: any, timestamp: number}
    >();

    getCache(key: string): {response: any, timestamp: number} | null {
        if (this._cache.has(key)) {
            return this._cache.get(key)!;
        }
        return null;
    }

    setCache(key: string, value: any) {
        this._cache.set(key, {
            response: value,
            timestamp: Date.now() 
        });
    }

    deleteCache(key: string) {
        this._cache.delete(key);
    }


}