import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { LoadingService } from "../shared/loading.service";

export const loadingInterceptor: HttpInterceptorFn =
    (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {

        const loadingService = inject(LoadingService);
        
        loadingService.loadingStatus = true;
        
        return next(req).pipe(
            tap(response => {
                if (response.type === 0) {
                    return;
                }
                loadingService.loadingStatus = false;
            })
        )
    }


