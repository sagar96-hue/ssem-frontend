import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userList = [

    {
    
    "id": 1,
    
    "name": "Leanne Graham",
    
    "username": "Bret",
    
    "email": "Sincere@april.biz"
    
    },
    
    {
    
    "id": 2,
    
    "name": "Ervin Howell",
    
    "username": "Antonette",
    
    "email": "Shanna@melissa.tv"
    
    },
    
    {
    
    "id": 3,
    
    "name": "Clementine Bauch",
    
    "username": "Samantha",
    
    "email": "Nathan@yesenia.net"
    
    },
    
    {
    
    "id": 4,
    
    "name": "Patricia Lebsack",
    
    "username": "Karianne",
    
    "email": "Julianne.OConner@kory.org"
    
    },
    
    {
    
    "id": 5,
    
    "name": "Chelsey Dietrich",
    
    "username": "Kamren",
    
    "email": "Lucio_Hettinger@annie.ca"
    
    }
    
    ]

    ExportTOExcel() {
      let excelData: any[] = [];
      //let i = 1;
      this.userList.forEach(x => {
        var dataToExport: {}
        dataToExport = {
          "Id": x.id,
  
          "Email": x.email,
  
          "Name": x.name,
  
          "User Name": x.username       
  
        }
        //i = i + 1;
        excelData.push(dataToExport);
      })
  
      const ws = XLSX.utils.json_to_sheet(excelData);
  
      const wb = XLSX.utils.book_new();
  
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      XLSX.writeFile(wb, 'Report.xlsx');
  
    }

 
 
}
