import { LeadsService } from './leads.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {
  leads : any;
  constructor(
    private service: LeadsService
  ) { }

  ngOnInit() {
    this.getLeads()
    console.log(this.service.leads)

  }

  getLeads(){
  
    this.leads = this.service.getLeads()
   }

}
