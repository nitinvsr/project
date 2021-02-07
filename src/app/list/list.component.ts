import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() posts: any;
  openpost = false;
  title;
  id;
  constructor() { }

  ngOnInit(): void {

  }
  openPost(id) {
    // const index = Array.from(el.parentElement.children).indexOf(el)
    console.log(this.posts);
    this.id = id;
    this.openpost = true;
    this.title = this.posts[id - 1].title;
    console.log("nitin");
  }
}
