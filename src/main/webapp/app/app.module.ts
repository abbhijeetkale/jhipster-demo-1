import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { Jhipsterdemo1SharedModule } from 'app/shared';
import { Jhipsterdemo1CoreModule } from 'app/core';
import { Jhipsterdemo1AppRoutingModule } from './app-routing.module';
import { Jhipsterdemo1HomeModule } from './home/home.module';
import { Jhipsterdemo1AccountModule } from './account/account.module';
import { Jhipsterdemo1EntityModule } from './entities/entity.module';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Jhipsterdemo1AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        Jhipsterdemo1SharedModule,
        Jhipsterdemo1CoreModule,
        Jhipsterdemo1HomeModule,
        Jhipsterdemo1AccountModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        Jhipsterdemo1EntityModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class Jhipsterdemo1AppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
