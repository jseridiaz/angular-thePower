import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseType } from '../home/info.modules';
import { CourseServicesService } from '../../core/services/course-services.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormUser } from './inscription.models';
import { ErrorsDirective } from '../../core/templates/errors/errors.directive';
import { validatorEmail, validatorNumbers } from './validator';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  imports: [CommonModule, ReactiveFormsModule, ErrorsDirective],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseServices: CourseServicesService
  ) {}
  public useForm?: FormGroup<FormUser>;
  public course?: CourseType;
  public isDisabled: boolean = true;

  getClass() {
    this.useForm?.get('Course')?.errors ? { outlineColor: 'red' } : {};
  }

  ngOnInit(): void {
    this.course = this.courseServices.getById(
      this.activatedRoute.snapshot.params['id']
    );
    this.useForm = new FormGroup<FormUser>({
      Course: new FormControl(this.course?.title || '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      Name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      Surname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      Email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      Number: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^\d{9}$/)],
      }),
      Street: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, validatorEmail()],
      }),
      Conditions: new FormControl(false, {
        nonNullable: true,
        validators: [Validators.requiredTrue],
      }),
    });
    if (!this.useForm.get('Course')?.value) {
      this.useForm.get('Course')?.setErrors({ required: true });
    }
  }
  public inputs = [];

  public handleSubmit(event: Event) {
    event.preventDefault();
    console.log(event);

    console.warn(this.useForm?.value);
  }
}
