import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }
   // tslint:disable-next-line: typedef
   getValues() {
   this.http.get('http://localhost:7000/api/values').subscribe(response => 
   {
     // console.log(response);
     this.values = response;
   }, error => {
     console.log(error);
   });
} 
}
