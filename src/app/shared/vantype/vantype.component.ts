import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-van-type',
  imports: [],
  templateUrl: './vantype.component.html',
  styleUrl: './vantype.component.css'
})
export class VanTypeComponent {
  @Input() type = '';
  @Input() class = '';

  get lowerType(){
    return this.type.toLowerCase()
  }

  get normalizedType(){
    const normalizedType = this.lowerType
    return normalizedType === 'rugged' ? 'Rugged' :
           normalizedType === 'luxury' ? 'Luxury' :
           normalizedType === 'simple' ? 'Simple' : '';
  }
}
