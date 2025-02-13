import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blanklayouts',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './blanklayouts.component.html',
  styleUrl: './blanklayouts.component.scss'
})
export class BlanklayoutsComponent {

}
