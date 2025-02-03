import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CourseType, KeyWordsArray } from '../../pages/home/info.modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent implements OnChanges {
  @Input() public course?: CourseType;
  public alt1 = '';
  public keyWords: KeyWordsArray[] = [
    'The digital program',
    'tools, strategies, and methodologies for business and digital marketing',
    'Without having to learn how to code',
    'Get a 360-degree view of business',
    'all the goals you set for yourself',
  ];

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.course?.img) {
      this.alt1 = this.course?.img.slice(30, 61);
    }
  }
  public highlightStrong(description: string): string {
    let highlight = description;
    this.keyWords.forEach((el) => {
      const regex = new RegExp(`(${el})`, 'gi');
      highlight = highlight.replace(regex, '<strong>$1</strong>');
    });
    return highlight;
  }
}
