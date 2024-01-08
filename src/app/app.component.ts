import {Component, ElementRef, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {COURSES} from "../db-data";
import {Course} from "./model/course";
import {CourseCardComponent} from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  courses = COURSES;


  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;


  constructor() {

  }

  ngAfterViewInit() {

  }

  onCourseSelected(course: Course) {

  }

}
