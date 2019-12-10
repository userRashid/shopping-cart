import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  shouldHideCartIcon = false;
  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe(val => {
      this.shouldHideCartIcon = this.location.path() !== '';
    });
  }
}
