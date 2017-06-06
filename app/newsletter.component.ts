import {Component, OnInit} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {Observable} from 'angular2/common'

@Component({
  selector: 'newsletter',
  templateUrl: 'newsletter.template.html'
})
export class NewsletterComponent {
  form: ControlGroup;

  constructor(private formbuilder: FormBuilder){
    this.form = formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(8)]],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      address: formbuilder.group({
          street: ['', Validators.required],
          zip: ['', Validators.required],
          city: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
      this.form.valueChanges.
      subscribe(form => {
        sessionStorage.setItem('form', JSON.stringify(form));
      });

      let formValues = sessionStorage.getItem('form');
      if (formValues) {
        this.applyFormValues(this.registerForm, JSON.parse(formValues));
      }
  }
}
