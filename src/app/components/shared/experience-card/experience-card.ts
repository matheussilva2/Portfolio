import { Component, input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html'
})
export class ExperienceCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly location = input.required<string>();
  readonly schedule = input.required<string>();
  readonly date = input.required<string>();
}
