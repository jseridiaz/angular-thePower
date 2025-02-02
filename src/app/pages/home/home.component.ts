import { Component } from '@angular/core';
import { InfoCardComponent } from '../../core/components/info-card/info-card.component';
import { CommonModule } from '@angular/common';
import { InfoCards } from './info.modules';

@Component({
  selector: 'app-home',
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public infos: InfoCards[] = [
    { firstParraf: '+120K', secondParraf: 'Stundents' },
    { firstParraf: '+100', secondParraf: 'Countries' },
    { firstParraf: '+600', secondParraf: 'Companies train their employees' },
    { firstParraf: '98%', secondParraf: 'Satisfaction' },
  ];
}
