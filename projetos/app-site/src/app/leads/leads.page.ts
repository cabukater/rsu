import { Lead } from './leads.model';
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
      this.service.getLeads().subscribe(data => {
        this.leads = data.map (e => {
          return{
            id: e.payload.doc.id,
            nome: e.payload.doc.data()['nome'],
            pagina: e.payload.doc.data()['pagina'],
            telefone: e.payload.doc.data()['Description'],
            email: e.payload.doc.data()['email']
            
          };
        })
     
      });
   }

   getRecord(id) {   
   console.log(id)
   this.service.remove(id)
   this. getLeads();
  }

}
