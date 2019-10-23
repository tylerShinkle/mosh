import {Component} from '@angular/core';

//decorator
@Component({
    selector: 'courses', // <courses>  would be'courses' or <div class="courses" would be '.courses'
                // binding our view to the title component in our class.
    template: `
        <h2>{{"Title: "+getTitle()}}</h2>
        <ul>
            <li></li>
        </ul>
    `,
})
export class CoursesComponent{
    title = "List of Courses";
    courses = ["Course 1", "Course 2", "Course 3"];

    getTitle(){
        return this.title;
    }
}


//{{String interpolation}}

//Directives