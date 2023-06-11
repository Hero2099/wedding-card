import { Component, OnInit } from '@angular/core';
import { RSVPService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RSVPComponent implements OnInit {

  name = '';
  notFound = false;

  constructor(private rsvpService: RSVPService) { }

  ngOnInit(): void {
  }

  rsvp() {
    let file = this.rsvpService.rsvp(this.name);

    if(file)
    {
      this.notFound = false;
      window.open(file, '_blank');
    }
    else {
      this.notFound = true;
    }
    
    this.name = '';
  }
}
