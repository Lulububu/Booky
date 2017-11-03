import { Component, OnInit, Input } from '@angular/core';
import { News } from './model/news.model';
import { NewsSize } from './model/news-size.enum';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() size : number;
  @Input() articles : News[];
  @Input() newstitle : string;

  constructor() { }

  ngOnInit() {
  }

  like(article: News) {
    article.liked = !article.liked;
  }

}
