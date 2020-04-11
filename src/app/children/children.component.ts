import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit, AfterContentInit {
  message = 'Children Page';

  @ContentChildren(ChildComponent) contentChildren : QueryList<ChildComponent>;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterContentInit() {
    this.contentChildren.toArray().forEach((children, index) => {
      console.log('child component counter :', ++index);
      children.printTitle();
    });
    }
}
