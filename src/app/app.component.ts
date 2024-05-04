import { Component } from "@angular/core";
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

import { CommonModule } from "@angular/common";

@Component({
 // standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // imports: [CommonModule, ItemComponent],
})
export class AppComponent {
  componentTitle = "Rehema To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false},
    {description: "walk", done: false},
  ];
  addItem(description: string) {
    if (!description) return;
  
    this.allItems.unshift({
      description,
      done: false
    });
  }
  

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

remove(item: Item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
}
