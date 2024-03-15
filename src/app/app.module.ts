import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ChartModule } from 'primeng/chart';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        AppComponent,
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule
        ],
    providers : [
    ],
    bootstrap : [AppComponent]

})

export class AppModule{}