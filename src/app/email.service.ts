
//injectable imported from core
import { Injectable } from '@angular/core';

//INJECTABLE DECORATOR
//injectable class in case the contructor has dependencies
//see courses.component.ts class for description of injection.
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
