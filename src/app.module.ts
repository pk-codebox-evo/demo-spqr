import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { App }   from './app';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [App],
    imports:      [BrowserModule, FormsModule],
    bootstrap:    [App],
})
export class AppModule {}
