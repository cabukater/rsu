import { Lead } from './leads.model';
import { LeadsService } from './leads.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.page.html',
  styleUrls: ['./leads.page.scss'],
})
export class LeadsPage implements OnInit {
  leads : any;
  form: FormGroup;
  ifError = false;

  constructor(
    private service: LeadsService
  ) {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      nome: new FormControl(),
      tel: new FormControl(),
      pagina: new FormControl('Calculadora')

   }) 

   }

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
            tel: e.payload.doc.data()['tel'],
            email: e.payload.doc.data()['email'],
            isEdit: false,
          };
        })
     
      });
   }

   deleteLead(item) {   

   this.service.remove(item)
   this. getLeads();
  }

  EditRecord(client){
    client.isEdit = true;
    client.EditNome = client.nome;
    client.EditEmail = client.email;
    client.EditTel = client.tel;
  }
  UpdateRecord(clientRow){
    let client = {};
    client['nome']=clientRow.EditNome;
    client['email']= clientRow.EditEmail;
    client['tel']= clientRow.EditTel;
    this.service.updateClient(clientRow.id, client);
    clientRow.isEdit = false;
  }
  
}
