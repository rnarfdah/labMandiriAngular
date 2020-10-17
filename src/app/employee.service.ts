import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl('1'),
    departement: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl('false')
  });
  
  initializeFormGroup() {
    this.form.setValue({
      $key:null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }
}

