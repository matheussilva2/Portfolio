import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-page',
  imports: [RouterOutlet, Header],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {

}
