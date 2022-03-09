import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeAr from '@angular/common/locales/ar';

registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeAr);

import { AppComponent } from './app.component';
import { ImpureTestPipe } from './pipes/impure-test.pipe';
import { EntryComponent } from './components/entry/entry.component';
import { UwucasePipe } from './pipes/uwucase.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ExerciseComponent } from './components/exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpureTestPipe,
    EntryComponent,
    UwucasePipe,
    SafeUrlPipe,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
