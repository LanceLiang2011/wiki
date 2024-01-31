import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  input = '';
  @Output() submitEvent = new EventEmitter<string>();

  handleSubmit(event: Event) {
    event.preventDefault();
    this.submitEvent.emit(this.input);
  }
}
