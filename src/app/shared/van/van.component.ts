import { Component, Input } from "@angular/core"
import { VanTypeComponent } from "../vantype/vantype.component"

@Component({
  selector:"app-van",
  templateUrl: "./van.component.html",
  styleUrl:"./van.component.css",
  imports: [VanTypeComponent]
})
export class VanComponent{
  @Input() classes = '';
  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() type!: string;
  @Input() price!: string | number;


}