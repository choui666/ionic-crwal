import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';


//第三方模块
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataServiceProvider} from '../providers/data-service/data-service';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {interCeptor} from "../providers/httpInterceptor/index";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp,{
            backButtonText: '',
        }),
        HttpClientModule,
        BrowserAnimationsModule,
        NgxChartsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DataServiceProvider,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: interCeptor.loading,
            multi: true,
        },
        InAppBrowser

    ]
})
export class AppModule {
}
