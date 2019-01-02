import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { CoreModule } from './core/core.module';
// import { LoggerService } from './core/logger.service';
// import { PlainLoggerService } from './core/plain-logger.service';
// import { DataService } from './core/data.service';
// import { dataServiceFactory } from './core/data.service.factory';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  //providers: [LoggerService], Added ProvidedIn in 6 or 7 version. See in logger.service.ts file

  bootstrap: [AppComponent]
})
export class AppModule { }
