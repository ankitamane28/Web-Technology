import { Component } from '@angular/core';

@Component({
  selector: 'app-student-directives',
  standalone: true,
  templateUrl: './student-directives.html',
  styleUrls: ['./student-directives.css']
})
export class StudentDirectivesComponent {

  showDiv: boolean = true;
  colorType: string = "green";

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  changeColor(color: string) {
    this.colorType = color;
  }
}