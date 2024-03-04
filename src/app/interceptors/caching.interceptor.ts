import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { CachingService } from "../shared/caching.service";

export const cachingInterceptor: HttpInterceptorFn =
    (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {

        if (req.method !== 'GET') {
            return next(req);
        }

        const cacheService = inject(CachingService);

        const cachedResponse = cacheService.getCache(req.urlWithParams);
        if (cachedResponse) {
            return of(cachedResponse);
        }


        return next(req).pipe(
            tap(event => {
              if (event instanceof HttpResponse) {
                // Cache the response
                cacheService.setCache(req.urlWithParams, event);
              }
            })
          );
    }