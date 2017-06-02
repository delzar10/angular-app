import {Injectable} from 'angular2/core';

@Injectable()
export class CourseService {
    getCourses() : string[] {
      return ["Courses1", "Courses2", "Courses3"];
    }
}
