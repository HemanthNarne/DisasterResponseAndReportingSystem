import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestSignupPage } from './test-signup';

@NgModule({
  declarations: [
    TestSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(TestSignupPage),
  ],
})
export class TestSignupPageModule {}
