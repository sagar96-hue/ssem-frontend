import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sse-training-report',
  templateUrl: './sse-training-report.component.html',
  styleUrls: ['./sse-training-report.component.scss']
})
export class SseTrainingReportComponent implements OnInit {

  

  constructor() {}


  selectedCar: number=1;
  selectesBranch :number=1;
  selectesCurrentStatus :number=1;
  selectesTrainingCode :number=1;
  selectesCountType :number=1;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  TrainedAudience = [
    {id:1,name:'All Branch'},
    {id:2,name:'AHM'},
    {id:3,name:'AUR'}
  ]
  Branches = [
    {id:1,name:'All Name'},
    {id:2,name:'BDE'},
    {id:3,name:'BDO'}
  ]
  CurrentStatus = [
    {id:1,name:'Active'},
    {id:2,name:'Inactive'},
    {id:3,name:'About LG'}
  ]
  TrainingCodes = [
    {id:1,name:'All Branch'},
    {id:2,name:'AHM'},
    {id:3,name:'AUR'}
  ]
  CountTypes = [
    {id:1,name:'All Name'},
    {id:2,name:'BDE'},
    {id:3,name:'BDO'}
  ]
  ngOnInit(): void {
    debugger
    
    
    
    
  }

}
