import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-btn',
  standalone: true,
  imports: [],
  templateUrl: './pagination-btn.component.html',
  styleUrl: './pagination-btn.component.css',
})
export class PaginationBtnComponent implements OnChanges {
  @Input() countPage = 1;
  @Input() totalPages!: number;
  @Output() nextPage = new EventEmitter();
  @Output() previousPage = new EventEmitter();

  setNextPage() {
    if (this.countPage < this.totalPages / 8) {
      this.countPage += 1;
      this.nextPage.emit();
    }
  }

  setPreviousPage() {
    if (this.countPage > 1) {
      this.countPage -= 1;
      this.previousPage.emit();
    }
  }

  ngOnChanges(): void {
    this.countPage = 1;
  }
}
