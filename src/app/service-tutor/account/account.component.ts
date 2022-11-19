import { AccountService } from './../../shared/account.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input('account') account: {name: string, status: string};
  @Input('index') index: number;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  setStatus(newStatus: string){
    this.accountService.updateStatus(this.index, newStatus);
  }
}
