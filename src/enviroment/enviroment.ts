/**
 * Created by admin on 2017/11/16.
 */
export const environment  = {
    bathPath:"//45.32.125.232:3003",
    getUrl:(url:string)=>{
       return environment.bathPath+url;
    }
}