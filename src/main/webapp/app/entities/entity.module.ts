import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhipsterdemo1BlogModule } from './blog/blog.module';
import { Jhipsterdemo1EntryModule } from './entry/entry.module';
import { Jhipsterdemo1TagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Jhipsterdemo1BlogModule,
        Jhipsterdemo1EntryModule,
        Jhipsterdemo1TagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterdemo1EntityModule {}
