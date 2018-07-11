import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-signup',
  templateUrl: 'test-signup.html',
})
export class TestSignupPage {
  @ViewChild('signupSlider') signupSlider: any;
 
  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;
  submitAttempt1: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder) {
    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: [''],
      // lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+'), Validators.required])],
      age: ['']
      });
  this.slideTwoForm = formBuilder.group({
    username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    privacy: [''],
    bio: ['']
});
  }
  
  next(){
    this.signupSlider.slideNext();
}

prev(){
    this.signupSlider.slidePrev();
}

save(){
  this.submitAttempt = true;
  if (!this.slideOneForm.controls.firstName.valid)    {
    this.submitAttempt1=true;
  }
  if(!this.slideOneForm.valid){
      this.signupSlider.slideTo(0);
  }
  else if(!this.slideTwoForm.valid){
      this.signupSlider.slideTo(1);
  }
  else {
      console.log("success!")
      console.log(this.slideOneForm.value);
      console.log(this.slideTwoForm.value);
  }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestSignupPage');
  }

}
