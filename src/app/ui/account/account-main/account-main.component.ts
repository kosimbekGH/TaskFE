import {Component, OnInit} from '@angular/core';
import {ConstantHelper} from "../../../core/helpers/constant-helper";
import {CasesEnum, SwitchEnum} from "../../../core/models/enums";
import {UserService} from "../../../core/services/user.service";
import {IUser, User} from "../../../core/models/user.model";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "./edit-dialog/edit-dialog.component";

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {
  consts = ConstantHelper;
  cases = CasesEnum;

  selectTypeCases = CasesEnum.My
  user: IUser = new User()

  casesFavorite = [1, 2, 3, 4]
  casesMy = [1, 2, 3, 4, 5, 6]

  casesCount = [1]
  creativeCount = [1]
  switchBtn = SwitchEnum;
  switch = SwitchEnum.Creative

  constructor(
    private _userService: UserService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this._userService.getCurrentUserProfile().subscribe(res => {
      this.user = res.model!
    })
  }

  setCasesType(selectType: CasesEnum) {
    this.selectTypeCases = selectType;
  }

  switchType(switchType: SwitchEnum) {
    this.switch = switchType;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
