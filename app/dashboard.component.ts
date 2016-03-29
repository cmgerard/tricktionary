import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Trick } from './trick';
import { TrickService } from './trick.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/template/dashboard.component.html'

})
export class DashboardComponent implements OnInit {
  tricks: Trick[] = [];
  constructor(private _trickService: TrickService) { }
  ngOnInit() {
    this._trickService.getTricks()
      .then(tricks => this.tricks = tricks.slice(1,5));
    constructor(
      private _router: Router,
      private _trickService: TrickService) {
    }
  }
  gotoDetail(trick: Trick) {
    let link = ['TrickDetail', {
      id: trick.id
    }];
    this._router.navigate(link);
  }
}

