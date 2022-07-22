import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  exform: FormGroup;

   @HostBinding('class.navbar-opened') navbarOpened = false;
   constructor() { }
  
    ngOnInit(): void {
      this.exform = new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'company' : new FormControl(null, [Validators.required, Validators.minLength(2)]),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'phone' : new FormControl(
          null,
          [
            Validators.required,
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]),
        'message' : new FormControl(null, [Validators.required, Validators.minLength(2)])
      });
    }

    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get name() {
      return this.exform.get('name');
    }
    get company() {
      return this.exform.get('company');
    }
    get email() {
      return this.exform.get('email');
    }
    get phone() {
      return this.exform.get('phone');
    }
    get message() {
      return this.exform.get('message');
    }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
  toHome(){
    document.getElementById("starter")?.scrollIntoView({behavior: "smooth"});
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }
}
