import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
 public chambres:any;


  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  onGetChambres() {
    this.httpClient.get("http://localhost:8080/chambres")
      .subscribe(data=>{
this.chambres=data;
      },err=>{
        console.log(err);
      })
  }
}
