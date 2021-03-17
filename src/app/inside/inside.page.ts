import { Component, OnInit } from '@angular/core';
import { AccessService } from '../services/access.service';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {
  logoutTimer = this.accessSrv.logoutTimer.asObservable();

  constructor(private readonly accessSrv: AccessService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.accessSrv.resetLogoutTimer();
  }
}
