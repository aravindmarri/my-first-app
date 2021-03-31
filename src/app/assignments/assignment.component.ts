import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./asssignment.component.css']
})

export class AssignmentComponent{
  userName = '';
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'This is your last warning';
  showSecret = false;
  log = [];
  onToggleDetails(): void {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
  say(): void {
    alert(this.message);
  }
}
