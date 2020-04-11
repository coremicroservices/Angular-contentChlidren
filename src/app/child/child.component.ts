import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit(): void {
  }
  public printTitle() {
    this.message = 'Message is :' + new Date();
  }
}
