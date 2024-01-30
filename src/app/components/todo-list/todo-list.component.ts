import { Component } from '@angular/core';
import { TodoItem } from "../../shared/todo-item";
import { FormsModule } from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  inputData: string = "";
  ToDoList: TodoItem[] = [
    new TodoItem("Lol"),
    new TodoItem("Lolik")
  ];

  createToDo(){
    if (this.inputData.trim()) {
      this.ToDoList.push(new TodoItem(this.inputData));
      this.inputData = "";
    }
  }

  onStatusChange(item: TodoItem){
    item.status = !item.status;
  }
}
