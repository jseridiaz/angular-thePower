import { Injectable } from '@angular/core';
import { COURSES } from './arrayCourses';
import { TypeCourses } from './course.models';

@Injectable({
  providedIn: 'root',
})
export class CourseServicesService {
  private courses: TypeCourses[] = COURSES;

  public getCourses(): TypeCourses[] {
    return this.courses;
  }
  public mostImportantCourses(): TypeCourses[] {
    return this.courses.sort((a, b) => b.tends - a.tends).slice(0, 4);
  }
  public reduceSeats(idCourse: string): void {
    const course = this.courses.find((el) => el.id === idCourse);
    if (course) course.availability--;
  }
  public getById(idCourse: string): TypeCourses | undefined {
    const course = this.courses.find((el) => el.id === idCourse);
    if (course) {
      return course;
    } else {
      return;
    }
  }
}
