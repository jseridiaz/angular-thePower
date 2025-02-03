import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}
  public proob =
    'https://framerusercontent.com/images/vYdl5MUPEybOKiP53Xmm8Ets.png?scale-down-to=512';
  public ngOnInit(): void {
    console.log(
      this.proob.indexOf('images'),
      this.proob[30],
      this.proob.lastIndexOf('.'),
      this.proob.slice(30, 61)
    );
  }
  public navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
