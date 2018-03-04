import {NgModule} from '@angular/core';
import {MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule
    ],
    exports: [MatButtonModule, MatMenuModule, MatIconModule, MatCardModule, MatToolbarModule]
})

export class MaterialModule {

}