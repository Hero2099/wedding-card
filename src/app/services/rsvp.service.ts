import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RSVPService { 
    rsvp(name: string) {
      switch(name.toLowerCase())
      {
        case 'estelle':        
          return 'assets/files/1.png'
        case 'marnus':        
          return 'assets/files/2.png'
        case 'jade':
        case 'declan':      
          return 'assets/files/3.png'
        case 'maurice':    
          return 'assets/files/4.png'
        case 'chaneen':
        case 'ronald':
          return 'assets/files/5.png'
        case 'anton':
        case 'elaine':
          return 'assets/files/6.png'
        case 'charmaine':
          return 'assets/files/7.png'
        case 'lillian':
          return 'assets/files/8.png'
        case 'gertrude':
        case 'gerhard':
          return 'assets/files/9.png'
        case 'warietjie':
        case 'marie':
          return 'assets/files/10.png'
        case 'frank':
        case 'lucinda':
          return 'assets/files/11.png'
        case 'shirlanie':
        case 'frikkie':
          return 'assets/files/12.png'
        case 'sharmone':
        case 'wilhelm':
          return 'assets/files/13.png'
        case 'hendre':
        case 'clarissa':
          return 'assets/files/14.png'
        case 'dean':
        case 'abby':
          return 'assets/files/15.png'
        case 'marile':
        case 'linda':
          return 'assets/files/16.png'
        case 'tess':
          return 'assets/files/17.png'
        case 'trish':
          return 'assets/files/18.png'
        case 'helena':
          return 'assets/files/19.png'
        case 'ivan':
          return 'assets/files/20.png'
        case 'pieter':
        case 'sandra':
          return 'assets/files/21.png'
        case 'moira':
          return 'assets/files/22.png'
        case 'michelle':
        case 'martin':
          return 'assets/files/23.png'
        case 'jani':
        case 'andre':
          return 'assets/files/24.png'
        case 'micky':
        case 'leon':
          return 'assets/files/25.png'
        case 'leandre':
        case 'maryke':
          return 'assets/files/26.png'
        case 'roelien':
        case 'charles':
          return 'assets/files/27.png'
        case 'jenny':
        case 'paul':
          return 'assets/files/28.png'
        case 'annelie':
        case 'riaan':
          return 'assets/files/29.png'
        case 'johan':
        case 'lizelle':
          return 'assets/files/30.png'
      }

      return '';
    }
}