import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly tags = input.required<string[]>();
  readonly image_url = input.required<string>();
}
