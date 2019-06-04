import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './quote-class/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hype';
  quote: Quote;

  constructor( private http: HttpClient) {
    
  }


  ngOnInit() {

    interface ApiResponse {
      quote: string;
      author: string
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      this.quote = new Quote(data.quote, data.author)
    }, err => {
      this.quote = new Quote("Never, never, never give up.", "winston churchill")
      alert("Error occured ")
    })
  }

}

