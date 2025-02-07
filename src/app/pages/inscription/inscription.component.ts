import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseType } from '../home/info.modules';
import { CourseServicesService } from '../../core/services/course-services.service';

@Component({
  selector: 'app-inscription',
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseServices: CourseServicesService
  ) {}

  public course?: CourseType;

  public description: string = '';
  public price: string = '';
  ngOnInit(): void {
    this.course = this.courseServices.getById(
      this.activatedRoute.snapshot.params['id']
    );
    // console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.course);
  }
  public inputs = [];

  public handleSubmit(event: Event) {
    event.preventDefault();
  }
}
