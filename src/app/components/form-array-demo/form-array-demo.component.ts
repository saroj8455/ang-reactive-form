import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css'],
})
export class FormArrayDemoComponent implements OnInit {
  skillForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      customer:[""],
      skills: this.fb.array([this.createSkill()]),
    });
  }

  onSubmit() {
    console.log(this.skillForm.value);
  }

  // Convenience getter for easy access to form array
  get skills(): FormArray {
    return this.skillForm.get('skills') as FormArray;
  }

  createSkill() {
    return this.fb.group({
      name: [''],
      proficiency: [''],
    });
  }

  addSkill() {
    const newSkil = this.fb.group({
      name: [''],
      proficiency: [''],
    });
    this.skills.push(newSkil);
  }
  // Remove a skill from the form array
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
