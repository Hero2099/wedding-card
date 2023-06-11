import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string)
  {
    this.router.navigate([route]);
  }

  openGpsLink()
  {
    let url = 'https://goo.gl/maps/4AVirDZB6Kzb3XLw6?coh=178573&entry=tt';
    window.open(url, '_blank');
    window.focus();
  }
}
