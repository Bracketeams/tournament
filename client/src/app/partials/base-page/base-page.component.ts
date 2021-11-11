import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // This import allows us to connect to the current route, and get some information out of it.

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  title: string | undefined;
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) { 
    this.route = route;
  }

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
  }

}
