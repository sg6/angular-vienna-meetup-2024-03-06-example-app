import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { NetworkAnalysisService } from "../shared/network-analysis.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


export const networkAnalysisInterceptor: HttpInterceptorFn =
    (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const networkAnalysisService = inject(NetworkAnalysisService);
    const modalService = inject(NgbModal);
    
    networkAnalysisService.addHttpCall();
    
    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            networkAnalysisService.addTrafficData({
                statusCode: err.status,
                successful: false,
                timestamp: new Date(),
                error: JSON.stringify(err),
            });

            let message = "There seems to be an issue... ";
            switch (err.status) {
                case 0: {
                    message += `The backend is not available.
                               Please contact the key user.`;
                    break;
                }
                case 401: {
                    message += `You do not have permissions.
                               Please log in.`
                    break;
                }
                case 500: {
                    message += `Internal server error.
                               Please contact the IT`;
                    break;
                }
            }

            modalService.open(message);
            
            return throwError(() => new Error('error'));
        })
    );
};

