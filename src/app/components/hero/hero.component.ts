import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroTitle = "Filmora 12 is Here, your Freedom to Creativity";

  @Input()
  public img = '';

  @Output() changeToInSlider = new EventEmitter<string>();
 
  seeUpdate() {
    alert( "updates !")
  }

  goTo( direction: 'previous' | 'next') {
    this.changeToInSlider.emit(direction);
  }

}
