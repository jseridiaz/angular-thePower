import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(private router: Router) {}
  public navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
