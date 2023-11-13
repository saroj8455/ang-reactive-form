import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    checkout: new FormControl(true),
  });


  customerGroup!:FormGroup;

  studentGroup = this.fb.group({
    name:"",
    courses:this.fb.array([])
  })

  constructor(private fb :FormBuilder) {
    this.customerGroup = this.fb.group({
      cemail:'',
      businessUnits:this.fb.array([{
        bcity:"",
        bstate:""
      },
      {
        bcity:"",
        bstate:""
      }])
    })
  }

  ngOnInit(): void {}

  createContact(form: FormGroup) {
    console.log(form);
  }

  get contactControls() {
    return this.contactGroup.controls;
  }

  get units(): FormArray {
    return this.customerGroup.get("businessUnits") as FormArray
    // return this.customerGroup.controls["businessUnits"] as FormArray
  }
  newUnits() {
    return this.fb.group({
      bcity:new FormControl(""),
      bstate:new FormControl("")
    })
  }

  addUnits() {
    this.units.push(this.fb.control(this.newUnits))
  }

  createCustomerGroup(){
    console.log(this.studentGroup);
  }


  get courses() {
    return this.studentGroup.controls['courses'] as FormArray
  }

  addCourse() {
    const courseForm = this.fb.group({
      topic:[''],
      duration:['']
    })
    this.courses.push(courseForm);
  }
}
