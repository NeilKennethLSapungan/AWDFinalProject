import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { SchedSectionComponent } from './sched-section/sched-section.component';
import { HotelsSectionComponent } from './hotels-section/hotels-section.component';
import { VenueSectionComponent } from './venue-section/venue-section.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { HistorySectionComponent } from './history-section/history-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroSectionComponent,
    SectionMainComponent,
    SchedSectionComponent,
    HotelsSectionComponent,
    VenueSectionComponent,
    GallerySectionComponent,
    HistorySectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
