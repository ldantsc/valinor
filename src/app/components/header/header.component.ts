import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @ViewChild('navMenu') navMenu: any;
  isOpen: boolean = false;
  innerWidth!: number;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  openDialog() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.navMenu.nativeElement.classList.remove('disable');
    } else {
      this.isOpen = false;
      this.navMenu.nativeElement.classList.add('disable');
    }
  }
}
