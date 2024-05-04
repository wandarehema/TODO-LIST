
import { Component, Input, Output, EventEmitter } from "@angular/core";
//import { CommonModule } from "@angular/common";
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  //imports: [CommonModule],
  //standalone: true,
  styleUrls: ['./item.component.css']
})
export class ItemComponent {



    editable = false;
  
    @Input() item!: Item;
    @Output() remove = new EventEmitter<Item>();
  
    saveItem(description: string) {
      if (!description) return;
  
      this.editable = false;
      this.item.description = description;
    }
  }
  


