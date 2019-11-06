import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  myForm: FormGroup;

  genders = ['male', 'female'];

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup ({
      myGroup: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
