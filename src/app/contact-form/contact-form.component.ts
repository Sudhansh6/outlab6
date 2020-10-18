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
    email: new FormControl('', [Validators.email, Validators.required, ]),
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
  getValue()
  {
    this.formService
      .getValue()
      .subscribe((form) => (this.contactForm = this.fb.group(form)));
  }
  showMsg = false;
  success = false;
  onSubmit() {
    this.success = false;
    if(this.contactForm.valid){
    this.formService
      .submit(this.contactForm.value)
      .subscribe((form) => {
        this.contactForm = this.fb.group(form);
        this.showMsg = true;
        this.success = true;
      });
  }
}
}
