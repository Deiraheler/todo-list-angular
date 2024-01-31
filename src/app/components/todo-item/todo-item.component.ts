import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import { TodoItem } from '../../shared/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item: TodoItem = new TodoItem("");
  @Output() statusChange = new EventEmitter<TodoItem>();

  onStatusChange() {
    this.statusChange.emit(this.item);
  }
}
