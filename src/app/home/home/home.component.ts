import { Component, OnInit } from '@angular/core';
import { Author } from '../../shared/news/model/author.model';
import { PublicApi, News } from '../../../generated-api/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PublicApi]
})
export class HomeComponent implements OnInit {
  newsContent: News[];
  socialContent: News[];
  publicApi: PublicApi;
  constructor(publicApi: PublicApi) { 
    this.publicApi = publicApi;
  }

  ngOnInit() {
    this.publicApi.getNews().subscribe(data => {this.newsContent = data});
   }

}
