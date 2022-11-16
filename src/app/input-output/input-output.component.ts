import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  serverElements: any = [
    {type: 'server', name: 'TestSever', content: 'Just a test!'},
    {type: 'blueprint', name: 'TestSever1', content: 'Just a test 1!'}
  ];

  serverCount: number = 10;

  constructor() { }

  ngOnInit(): void {
    console.log(this.serverElements);
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

}
