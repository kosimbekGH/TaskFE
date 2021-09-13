import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-case',
  templateUrl: './profile-case.component.html',
  styleUrls: ['./profile-case.component.scss']
})
export class ProfileCaseComponent implements OnInit {
  @Input("case") case : any[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
