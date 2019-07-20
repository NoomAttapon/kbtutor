import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/////// primeNG  package Import ///////////////
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';

import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CoursesComponent } from './course/course-list/courses.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    CourseDetailComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
