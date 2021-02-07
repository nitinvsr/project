import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormArray, FormControl, FormGroup, FormBuilder, Validators, NgForm,
} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'project';
  title = "null";
  postform: FormGroup;
  addpost = false;
  id;
  images;
  max;
  body;
  posts = [];
  openpost = false;
  control = {
    postform: {
      title: new FormControl(''),
      images: new FormControl(''),
      id: new FormControl(''),
      body: new FormControl('')
    }
  }
  ngOnInit() {

  }
  constructor(private http: HttpClient) {
    this.postform = new FormGroup(this.control.postform);
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.posts = res.slice(0, 8);
      console.log(this.posts);

    },
      (err) => console.log(err)
    );
  }
  // allposts(){

  //   document.getElementById("surprise").innerHTML = "<img src=this.postform.value.images />";
  //   var newdiv = document.getElementById('surprise').children;
  //   newdiv[0].innerHTML = this.postform.value.title;
  //   newdiv[1].innerHTML = this.postform.value.id;

  // }
  openPost(id) {
    // const index = Array.from(el.parentElement.children).indexOf(el)
    console.log(this.posts);
    this.id = id;
    this.addpost = false;
    this.openpost = true;
    this.title = this.posts[id - 1].title;
    this.body = this.posts[id - 1].body;
    this.images = this.posts[id - 1].images;
    console.log("nitin");
  }
  delete(id) {
    delete this.posts[id - 1];
    this.posts[id - 1] = "null";
    console.log(this.posts);
    this.openpost = false;
    window.alert("Deleted Post");
  }
  addPost() {
    this.openpost = false;
    this.addpost = true;
  }
  submit(e) {
    e.preventDefault();
    console.log(this.postform.value);
    console.log(this.postform.value.images);
    // const formData = new FormData();
    // formData.append('title', this.postform.value);
    // formData.append('file', this.images);
    // console.log(formData);
    this.max = this.posts.length;
    this.postform.value.id = this.max + 1;
    this.posts.push(this.postform.value);
    console.log(this.posts);
    // document.getElementById("surprise").innerHTML = "<img src=this.postform.value.images />";
    var newdiv = document.createElement('div');
    newdiv.innerHTML = this.postform.value.title;
    var newdiv2 = document.createElement('div');
    newdiv2.innerHTML = this.postform.value.id;
    this.addpost = false;
    window.alert("Post Added");
    // document.getElementById("surprise").appendChild(newdiv);
    // document.getElementById("surprise").appendChild(newdiv2);
    // newdiv.onclick = function () {
    //   console.log(newdiv.nextSibling);
    // }
    // var newdiv = document.getElementById('all-posts').innerHTML;
    // document.getElementById('all-posts').innerHTML = newdiv;
    // this.ngOnInit();
    // $("#all-posts").load(location.href + " #all-posts")
  }
  open(e) {
    this.openPost(e.target.nextSibling.innerHTML);
  }
  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.images = event.target.files[0].value;
      console.log(event.target.files);
      console.log(this.images)
      // document.getElementById("preview").setAttribute('src', this.images.name)
    }
    // if (input.files && input.files[0]) {
    //   var reader = new FileReader();

    //   reader.onload = function (e) {
    //     $('#blah')
    //       .attr('src', e.target.result)
    //       .width(150)
    //       .height(200);
    //   };

    //   reader.readAsDataURL(input.files[0]);
    // }
  }
  // reloadDIV () {document.getElementById("all-posts").innerHTML.reload}
  // function updateDiv()
  // { 
  //     $( "#here" ).load(window.location.href + " #here" );
  // }

}
