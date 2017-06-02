import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    template: `
      <h2>{{title}}</h2>
      <button class="btn btn-primary" [class.active]="isActive"
              [style.backgroundColor]="isActive ? 'blue' : 'gray'"> </button>
      <ul>
        <li *ngFor="#course of courses">
          {{course}}
        </li>
      </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
    isActive: boolean = false;
    title: string = "Courses Title";
    courses: string[];

    constructor (courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
