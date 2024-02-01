import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CryptoCardComponent } from '../../components/crypto-card/crypto-card.component';
import { CryptoCurrencyPricesComponent } from '../../components/crypto-currency-prices/crypto-currency-prices.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { PaginationBtnComponent } from '../../components/pagination-btn/pagination-btn.component';
import { DataCoinRanking } from '../../models/crypto-coin';
import { CoinRankingAPIService } from '../../services/coin-ranking-api.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CryptoCardComponent, CryptoCurrencyPricesComponent, SearchInputComponent, PaginationBtnComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  title: string = 'Valinor Coin';
  subtitle: string = 'Preços de criptomoedas por\n capitalização de mercado';
  countPage: number = 1;
  totalPage: any = 0;
  cryptos: DataCoinRanking | any;

  constructor(private service: CoinRankingAPIService) {}

  ngOnInit(): void {
    this.loadCryptoData(this.service);
  }

  loadCryptoData(service: any) {
    this.service.getCryptoData().subscribe({
      next: (response: DataCoinRanking) => {
        this.totalPage = response.data.stats.total;
        this.cryptos = response.data.coins;
      },
    });
  }

  getSearchOutput(event: string) {
    this.service.search = event;
    this.service.offset = 0;
    this.countPage = 1;
    this.loadCryptoData(this.service);
  }

  getNextPage(event: void) {
    this.service.offset += 8;
    this.loadCryptoData(this.service);
  }

  getPreviousPage(event: void) {
    this.service.offset -= 8;
    this.loadCryptoData(this.service);
  }
}
