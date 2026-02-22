import { Component } from "@angular/core";
import { SectionSmallTitle } from "../../components/shared/section-small-title/section-small-title";
import { SectionTitle } from "../../components/shared/section-title/section-title";
import { SectionDescription } from "../../components/shared/section-description/section-description";
import { SectionContainer } from "../../components/shared/section-container/section-container";
import { SectionLink } from "../../components/shared/section-link/section-link";
import { ProjectCard } from "../../components/shared/project-card/project-card";
import { PROJECTS } from "../../core/constants/projects";
import { ExperienceCard } from "../../components/shared/experience-card/experience-card";
import { EXPERIENCES } from "../../core/constants/experiences";

@Component({
    selector: 'app-home',
    imports: [SectionSmallTitle, SectionTitle, SectionDescription, SectionContainer, SectionLink, ProjectCard, ExperienceCard],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    protected readonly my_projects = PROJECTS;
    protected readonly my_experiences = EXPERIENCES;
}