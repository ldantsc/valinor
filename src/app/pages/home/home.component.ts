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
  cryptos: DataCoinRanking | any;
  totalPage!: number;

  constructor(private service: CoinRankingAPIService) {}

  ngOnInit(): void {
    this.loadCryptoData();
  }

  loadCryptoData() {
    this.service.getCryptoData().subscribe({
      next: (response: DataCoinRanking) => {
        this.totalPage = response.data.stats.total;
        this.cryptos = response.data.coins;
        console.log(this.cryptos)
      },
    });
  }

  getSearchOutput(event: string) {
    this.service.search = event;
    this.loadCryptoData();
  }

  getNextPage() {
    this.loadCryptoData();
  }

  getPreviousPage() {
    this.loadCryptoData();
  }
}
