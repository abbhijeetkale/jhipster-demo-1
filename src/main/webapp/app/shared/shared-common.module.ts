import { NgModule } from '@angular/core';

import { Jhipsterdemo1SharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Jhipsterdemo1SharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Jhipsterdemo1SharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jhipsterdemo1SharedCommonModule {}
