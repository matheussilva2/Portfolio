import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-section-link',
  imports: [],
  templateUrl: './section-link.html',
})
export class SectionLink {
  readonly className = input<string>('', { alias: 'class' });
  readonly url = input.required<string>();
  readonly label = input.required<string>();
}
