import { Component, OnInit } from '@angular/core';
import { InfoCardComponent } from '../../core/components/info-card/info-card.component';
import { CommonModule } from '@angular/common';
import { CourseType, InfoCards } from './info.modules';
import { CourseCardComponent } from '../../shared/course-card/course-card.component';
import { arrayCourses } from './arrayCourses';
import { CourseServicesService } from '../../core/services/course-services.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, InfoCardComponent, CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private courseServices: CourseServicesService) {}
  public infos: InfoCards[] = [
    { firstParraf: '+120K', secondParraf: 'Stundents' },
    { firstParraf: '+100', secondParraf: 'Countries' },
    { firstParraf: '+600', secondParraf: 'Companies train their employees' },
    { firstParraf: '98%', secondParraf: 'Satisfaction' },
  ];
  public coursesList: CourseType[] = [];
  ngOnInit(): void {
    this.coursesList = this.courseServices.mostImportantCourses();
  }
}
