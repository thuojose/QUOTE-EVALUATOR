import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
// import { DateCountPipe } from '../date-count.pipe'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, 'Do not go through life grow through life','Eric Butterworth','Sarah', new Date(1980,3,14)),
    new Quote(2,'Life is really simple,but we insist on making it complicated','Confucius','Joe', new Date(1990,8,14)),
    new Quote(4,'Do one thing everyday that scares you','Eleanor Roosevelt','Lyn', new Date(2006,7,14)),
    new Quote(5, 'Dream big work hard make it happen','Zander Creation','Ruanne', new Date(2008,9,14)),
    new Quote(6, 'A little progress each day adds up to big results','Jameel Mohsin','Kevin', new Date(2018,12,14)),
    new Quote(7,'Strive for progress not perfection','Daniel Amen','Anna', new Date (2015,11,14)),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quote.length+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
addVote(index){
  this.quotes[index].upVote +=1;
}
cutVote(index){
  this.quotes[index].downVote -=1;
}
deleteQuote(index){
this.quotes.splice(index,1)
}
  constructor() { }

  ngOnInit(): void {
  }

}
