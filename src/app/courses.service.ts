import { Component } from '@angular/core';

//notice service in title
//fake http service for testing independant of http endpoint 

export class CoursesService
{
    getCourses()
    {
        return  ["Course 1", "Course 2", "Course 3"];
    }
}