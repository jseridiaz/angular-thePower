import { Component } from '@angular/core';
import { GmailComponent } from '../../../shared/svgs/gmail/gmail.component';

@Component({
  selector: 'app-footer',
  imports: [GmailComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
