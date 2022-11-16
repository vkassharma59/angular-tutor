import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-refrences',
  templateUrl: './local-refrences.component.html',
  styleUrls: ['./local-refrences.component.css']
})
export class LocalRefrencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement){
    console.log(serverName.value)
  }

}
