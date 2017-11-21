/**
 * Created by admin on 2017/11/21.
 */
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Loading, LoadingController} from "ionic-angular";
import "rxjs/add/operator/do";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loading:LoadingController){

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loading:Loading = this.loading.create({
            content:'数据加载中...'
        });
        loading.present(res=>{
            return false;
        })
        return next.handle(req).do(res=>{
            try {
                loading&&loading.dismiss();
            }catch (err){

            }
            loading = null;

        });
    }
}