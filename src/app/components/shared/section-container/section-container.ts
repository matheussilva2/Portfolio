import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  imports: [],
  templateUrl: './section-container.html'
})
export class SectionContainer {
  readonly className = input<string>('', { alias: 'class' });
}
