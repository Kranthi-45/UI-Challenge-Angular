import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { FooterComponent } from './footer/footer.component';
import { Showcase1ContainerComponent } from './home-container/showcase1-container/showcase1-container.component';
import { Showcase2ContainerComponent } from './home-container/showcase2-container/showcase2-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeContainerComponent,
    FooterComponent,
    Showcase1ContainerComponent,
    Showcase2ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
