import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppLoaderService } from './app-loader.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private callStackCount = 0;
  private httpBackendClient: HttpClient;
  constructor(
    private httpClient: HttpClient,
    httpBackend: HttpBackend,
    private appLoaderService: AppLoaderService,
  ) {
    this.httpBackendClient = new HttpClient(httpBackend);
  }

  private getClient(needAuth: boolean): HttpClient {
    return needAuth ? this.httpClient : this.httpBackendClient;
  }

  /* Public Methods */
  /**
   * To call the API endpoints
   * @param apiPath 
   * @param options 
   * @param loaderText 
   * @param hasAuth
   * @param doCache  
   * @returns 
   */

  get<T>(apiPath: string, options: any = null, loaderText: string | any = null, hasAuth: boolean = true): Observable<T> {
    const showLoader = loaderText ? true : false;
    if (showLoader) { this.showLoader(loaderText); }
    return this.getClient(hasAuth).get<T>(apiPath).pipe(tap<any>((resp: any) => {

    }),
    catchError(err => {
      if (showLoader) { this.hideLoader(); }
      return throwError(() => new Error(err));
    }),
  )
  }


  post<T>(apiPath: string, 
    data: any,
    options: any = null,
    loaderText: string | any = null,
    hasAuth: boolean = true
  ): Observable<T> {
    const showLoader = (loaderText?.length > 0) ? true : false;
    let optionsData: any = {headers: options};
    return this.httpClient.post<any>(apiPath, data, optionsData).pipe(        
      tap((response: any) => {
        console.log(response, 'shivam')
      if (showLoader) { this.hideLoader(); }
    }),
    catchError((error :HttpErrorResponse)=> {
      console.log(error);
      if (showLoader) { this.hideLoader(); }
      return throwError(() => error);
    }))
  }





  /* Private Methods */
  private showLoader(loaderText: string): void {
    if (this.callStackCount === 0) {
      this.appLoaderService.start(loaderText);
    }
    this.callStackCount++;
  }

  private hideLoader(): void {
    this.appLoaderService.stop();
    if (this.callStackCount === 1) {
      this.appLoaderService.stop();
    }
    if (this.callStackCount > 0) {
      this.callStackCount--;
    }
  }
}
