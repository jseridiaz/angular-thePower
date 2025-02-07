import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseServicesService } from '../../core/services/course-services.service';
import { TypeCourses } from '../../core/services/course.models';
import { CourseCardComponent } from '../../shared/course-card/course-card.component';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  constructor(private courseService: CourseServicesService) {}
  public allCourses: TypeCourses[] = [];
  ngOnInit(): void {
    this.allCourses = this.courseService.getCourses();
    console.log(this.allCourses);
  }
}
