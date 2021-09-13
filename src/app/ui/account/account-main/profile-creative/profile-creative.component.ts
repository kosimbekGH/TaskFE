import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-creative',
  templateUrl: './profile-creative.component.html',
  styleUrls: ['./profile-creative.component.scss']
})
export class ProfileCreativeComponent implements OnInit {
  @Input("creative") creative : any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
