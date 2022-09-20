import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

function openSideMenu() {
  this.menuCtrl.toggle('left');
  return './tablinks/menu-tabs.page.html';
}

