import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-tutor',
  templateUrl: './service-tutor.component.html',
  styleUrls: ['./service-tutor.component.css']
})
export class ServiceTutorComponent implements OnInit {

  account: {name: string, status: string}[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.account = this.accountService.accounts
  }

  onAddAccount(accountData: {name: string, status: string}){
    this.accountService.addAccount(accountData);
  }
}
