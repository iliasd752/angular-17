import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-image',
  standalone: true,
  imports: [Component, Input],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.scss'
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl: string = '';



  constructor() { }

  ngOnInit() {
  }

}
