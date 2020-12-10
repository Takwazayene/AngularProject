import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
employe;
  constructor(public employeservice: EmployeService) { }

  ngOnInit(): void {


    this.employeservice.getallemploye()
    .subscribe(
      (data) => {
        this.employe = data;
        console.log(this.employe);
      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
      //() => alert('i finshed')
    )
  ;
  }

}
