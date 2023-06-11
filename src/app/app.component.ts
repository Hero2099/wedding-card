import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wedding-card';
  navOpen: boolean = false;
  currentRoute: string = '/home';

  constructor(private router: Router){
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.currentRoute = ev.url;
      }
    });
  }

  ngOnInit() {}

  navigate(route: string)
  {
    if(route != this.currentRoute)
    {
      this.router.navigate([route]);
      this.navOpen = false;
    }
  }
}
