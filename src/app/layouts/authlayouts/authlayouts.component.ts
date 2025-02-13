import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-authlayouts',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './authlayouts.component.html',
  styleUrl: './authlayouts.component.scss'
})
export class AuthlayoutsComponent {

}
