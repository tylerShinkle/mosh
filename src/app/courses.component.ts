import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

//decorator
@Component({
    selector: 'courses', // <courses>  would be'courses' or <div class="courses" would be '.courses'
                // binding our view to the title component in our class.
    template: 
    `
        <h2>{{"Title: "+getTitle()}}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
    `,
})
export class CoursesComponent{
    title = "List of Courses";
    courses;
    /*
    TOO CLOSLY COUPLED
    //when an object of this class is made create a service object for 
    //it. Then set the class member courses to the return value
    //of getCourses called from the service object of the imported
    //CoursesService class.
    */
    //requires a provider in app.module.ts
    //provider in app.module.ts injects singleton reference
    //to instantiate this objects with matching type of provider.
    constructor(service: CoursesService)
    {
        this.courses = service.getCourses();
        //DEPENDENCY INJECTION
        /*
        //coupling too close to component
        //a change to the parameters of the CoursesService constructor
        //will cause needed changes throughout and is fragile.
        let service = new CoursesService();
        this.courses = service.getCourses();
        */
       
    }

    //logic for http services (problematic here as it couples component to http)

    getTitle(){
        return this.title;
    }
}


//{{String interpolation}}

//Directives: asterisk(*) symbolizes DOM modification

//each component should only deal with its own representation / logic. services all rest