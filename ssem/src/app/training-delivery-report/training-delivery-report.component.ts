import { Component, OnInit } from '@angular/core';
import {  TrainingDeliveryModel } from '../Models/DeliveryModel';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-training-delivery-report',
  templateUrl: './training-delivery-report.component.html',
  styleUrls: ['./training-delivery-report.component.scss']
})
export class TrainingDeliveryReportComponent implements OnInit {

  dropdownData : any[] = [];  
 
  form!:FormGroup;
  selectedItems: any[] = [] ;
  
  searchModel = {
    fromDate : '',
    toDate: Date,
    branch: [],
    profile: [],
    trainingCode: []
  }

  testModel : TrainingDeliveryModel =new TrainingDeliveryModel();
selectedBranch:any;
selectedProfile:any;
selectedTrainingCode:any;
  constructor() {

   }
   branches = [
    {id:1,name:'All Branch'},
    {id:1,name:'AHM'},
    {id:1,name:'AUR'},


  ]
  profiles = [
    {id:1,name:'All Name'},
    {id:1,name:'BDE'},
    {id:1,name:'BDO'}
  ]
  trainingCodes = [
    {id:1,name:'All Training Codes'},
    {id:1,name:'AP NPI 2022'},
    {id:1,name:'About LG'}
  ]
  ngOnInit(): void {
    debugger
    ///
      this.testModel.name='sagar';
     
     
      

  }
  search()
  {
    debugger;
  }
}
