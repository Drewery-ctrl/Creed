import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastsComponent } from '@components/podcasts/podcasts.component';
import { PodcastItemComponent } from '@components/podcast-item/podcast-item.component';
import { KeywordFilterPipe } from './pipes/keyword-filter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PodcastsComponent,
    PodcastItemComponent,
    KeywordFilterPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
