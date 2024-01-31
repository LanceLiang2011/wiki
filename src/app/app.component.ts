import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages: any[] = [];

  constructor (private wikipediaService: WikipediaService) {}
  handleSubmitEvent(term: string) {
    this.wikipediaService.search(term).subscribe((response) => {
      this.pages = response.query.search;
    });
  }
}
