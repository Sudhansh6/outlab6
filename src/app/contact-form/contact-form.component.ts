import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { form } from '../form'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

export class ContactFormComponent implements OnInit {
  contactForm =  new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, ]),
    feedback: new FormControl('',[Validators.required]),
    comment: new FormControl(''),
  });

  validResponse =  new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required, ]),
    feedback: new FormControl('',[Validators.required]),
    comment: new FormControl(''),
  });

  constructor(private formService: FormService, private fb:FormBuilder){}

  ngOnInit() {
    this.getValue();
  } 
  message = '';
  showMsg = false;
  success = false;
  getValue()
  {
    this.formService
      .getValue()
      .subscribe(
        (form) =>{
          this.contactForm = this.fb.group(form)
        },
        (error) => {
          this.success = false;
          this.message = 'Form Retrieval failed';
          this.showMsg=true;
        }
        );
  }
  
  onSubmit() {
    this.showMsg = false;
    if(this.contactForm.valid){
    this.formService
      .submit(this.contactForm.value)
      .subscribe(
        (form) => {
          this.contactForm = this.fb.group(form);
          this.message = 'Form successfully submitted';
          this.success = true;
          this.showMsg = true;
        },
        (error) => {
          this.message = 'Form submission failed';
          this.success = false;
          this.showMsg = true;
        }
        );
  }
}
}
