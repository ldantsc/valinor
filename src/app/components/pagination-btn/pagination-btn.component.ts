import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CoinRankingAPIService } from '../../services/coin-ranking-api.service';

@Component({
  selector: 'app-pagination-btn',
  standalone: true,
  templateUrl: './pagination-btn.component.html',
  styleUrl: './pagination-btn.component.css',
})
export class PaginationBtnComponent implements OnChanges {
  @Output() nextPage = new EventEmitter();
  @Output() previousPage = new EventEmitter();
  @Input() totalPages!: number;
  countPage: number;
  offset: number;

  constructor(private CoinRankingAPIService: CoinRankingAPIService) {
    this.offset = CoinRankingAPIService.offset;
    this.countPage = CoinRankingAPIService.page;
  }

  setNextPage() {
    if (this.countPage < parseInt((this.totalPages / 8).toFixed(0))) {
      this.countPage += 1;
      this.CoinRankingAPIService.page += 1;
      this.CoinRankingAPIService.offset += 7;
      this.nextPage.emit();
    }
  }

  setPreviousPage() {
    if (this.countPage > 1) {
      this.countPage -= 1;
      this.CoinRankingAPIService.page -= 1;
      this.CoinRankingAPIService.offset -= 7;
      this.previousPage.emit();
    }
  }

  ngOnChanges(): void {
    if (this.CoinRankingAPIService.search) {
      this.CoinRankingAPIService.page = 1;
      this.countPage = 1;
    }
  }
}
