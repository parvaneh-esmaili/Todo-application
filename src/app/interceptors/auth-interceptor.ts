import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environments';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if(!req.url.startsWith("http")){

    var modifiedUrl= req.clone({
      url: `${environment.apiUrl}${req.url}`
    });

    return next(modifiedUrl)
  } else{
    return next(req);
  }
  
};
