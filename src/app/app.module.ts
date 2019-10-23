import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

//decorator
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //Singleton patterm , only one instance of class in memory for all 
    //components in module.
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
