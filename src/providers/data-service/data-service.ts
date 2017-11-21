import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from  "../../enviroment/enviroment";

/*
 Generated class for the DataServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DataServiceProvider {

    constructor(public http: HttpClient) {
        console.log('Hello DataServiceProvider Provider');
    }

    getNews() {
        return this.http.get(environment.getUrl('/news'))
    }

    getAllCity() {
        return this.http.get(environment.getUrl('/citys'));
    }

    getCountGroupbyTotalPrice(cityId:string) {
        return this.http.get(environment.getUrl('/totalPriceGroup'),{
            params:{
                cityId
            }
        });
    }

    getCountGroupbyAvaragePrice(cityId:string) {
        return this.http.get(environment.getUrl('/avaragePriceGroup'),{
            params:{
                cityId
            }
        });
    }

    getCountGroupbySquare(cityId:string) {
        return this.http.get(environment.getUrl('/squareGroup'),{
            params:{
                cityId
            }
        });
    }



}
