import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NetworkAnalysisService } from '../../shared/network-analysis.service';
import { TrafficData } from "../../interfaces/trafficData.interface";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  form!: FormGroup;
  saved = false;
  trafficData: TrafficData[] = [];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private networkAnalysis: NetworkAnalysisService,
  ) {
    this.form = this.formBuilder.group({
      'username': [''],
    })

    this.trafficData = [...networkAnalysis.trafficData];
  }

  changeRole(role: 'Visitor' | 'User' | 'Admin') {
    this.userService.setRole(role);
  }

}
