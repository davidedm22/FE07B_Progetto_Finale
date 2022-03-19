import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {
  tenantID = 'fe_0721b';
  bearerToken =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NjgzNTIxNywiZXhwIjoxNjQ3Njk5MjE3fQ._5fVsANxQVesdoc2lLkFy0JsA88ON00oQbWc246KvLECs3cGgfZ2G3YvVTmC43w0Sx3E265eBltiCdR22L2f5g';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let myReq: HttpRequest<any> = request;
    myReq = request.clone({
      headers: request.headers
        .set('Authorization', this.bearerToken)
        .set('X-TENANT-ID', this.tenantID),
    });

    return next.handle(myReq);
  }
}
