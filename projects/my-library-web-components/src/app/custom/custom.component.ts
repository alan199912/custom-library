import { Component, Input } from "@angular/core";

@Component({
  selector: "app-custom",
  standalone: true,
  imports: [],
  templateUrl: "./custom.component.html",
  styleUrl: "./custom.component.scss"
})
export class CustomComponent {
  @Input() public name: string = "stranger";
}
