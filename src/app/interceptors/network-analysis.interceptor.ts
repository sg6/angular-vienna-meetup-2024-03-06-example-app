import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { NetworkAnalysisService } from "../shared/network-analysis.service";


export const networkAnalysisInterceptor: HttpInterceptorFn =
    (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const networkAnalysisService = inject(NetworkAnalysisService);
    
    networkAnalysisService.addHttpCall();
    
    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            networkAnalysisService.addTrafficData({
                statusCode: err.status,
                successful: false,
                timestamp: new Date(),
                error: JSON.stringify(err),
            })
            return throwError(() => new Error('error'));
        })
    );
};

