import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-mapa-form',
  templateUrl: './mapa-form.component.html',
  styleUrls: ['./mapa-form.component.scss'],
  providers:[    EmailComposer  ]
})
export class MapaFormComponent implements OnInit {

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {}

  onSubbmit(){
 
let email = {
  to: 'cabukater@gmail.com',
  cc: 'erika@mustermann.de',
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
    'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    'file://README.pdf'
  ],
  subject: 'Cordova Icons',
  body: 'camila recebe',
  isHtml: true
}
this.emailComposer.open(email);


  }
  
}
