import { ChildrenComponent } from './children/children.component';
import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'content-example';
  @ContentChildren(ChildrenComponent) children : QueryList<ChildrenComponent>
  shouldsay = true;
  items: Array<number> = [1, 2, 3, 4, 5, 6, 8, 5, 5, 5, 5, 5, 5, 5, 6, 5, 85];
  ngAfterContentInit() {
   // debugger;
    this.children.forEach(tabInstance => console.log(tabInstance));
  }

}
