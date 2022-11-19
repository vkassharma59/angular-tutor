import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private LoggingService: LoggingService){}

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.LoggingService.logEvent(status);
  }

  addAccount(account){
    if( Object.keys(account).length > 0 ) {
      this.accounts.push(account);
    }
  }
}
