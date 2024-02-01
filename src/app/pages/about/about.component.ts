import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  urlPortfolio: string = 'https://dantsdev.vercel.app/';
  title: string = 'Valinor';
  subtitle: string[] = ['Este projeto foi desenvolvido utilizando o Angular 17', 'Dados fornecidos por Coinranking API'];
}
