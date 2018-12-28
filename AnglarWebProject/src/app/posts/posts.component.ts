import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
import{Observable} from 'rxjs';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$ : object;


  constructor( private data:DataService , ) { }

  ngOnInit() {

    this.data.getposts().subscribe(
      data => this.posts$=data

    )
  }

}