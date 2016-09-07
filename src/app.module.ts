import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { App }   from './app';
import { FormsModule } from "@angular/forms";
import { StorageService } from "./services/storage.service";

@NgModule({
    declarations: [App],
    imports: [BrowserModule, FormsModule],
    providers: [StorageService],
    bootstrap: [App],
})
export class AppModule {}
