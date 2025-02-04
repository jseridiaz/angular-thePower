import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(private router: Router) {}
  public proob =
    'https://framerusercontent.com/images/vYdl5MUPEybOKiP53Xmm8Ets.png?scale-down-to=512';

  public navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  public navigateToCourse() {
    this.router.navigate(['/courses']);
  }
}
