import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-calc-modal',
  templateUrl: './result-calc-modal.component.html',
  styleUrls: ['./result-calc-modal.component.scss'],
})
export class ResultCalcModalComponent implements OnInit {
  @Input() obj: any;
  @Input() dados: any;
  constructor() { }

  ngOnInit() {
    console.log(this.obj)
   
  }

}
