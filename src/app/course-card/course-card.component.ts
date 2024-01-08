import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList, TemplateRef,
  ViewChild
} from '@angular/core';

import {COURSES} from '../../db-data';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {NgSwitch, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgSwitch,
    NgTemplateOutlet
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {

  }

  ngOnInit() {

  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {

    this.courseEmitter.emit(this.course);

  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'

    };
  }



}
