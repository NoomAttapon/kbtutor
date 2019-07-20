import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import $ from "jquery";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  items: MenuItem[];
  chkForm = true;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

  myFunction () {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
      // $('.topnav.responsive a ').slideDown(1000);

    } else {
      x.className = 'topnav';
    }
  }


  formToggle () {
      if (this.chkForm) {
        this.chkForm = false;
      } else {
        this.chkForm = true;
      }
  }

}
