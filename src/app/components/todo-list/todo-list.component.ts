import { Component } from '@angular/core';
import { TodoItem } from "../../shared/todo-item";
import { FormsModule } from "@angular/forms";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    TodoItemComponent,
    JsonPipe,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  inputData: string = "";
  _ToDoList: TodoItem[] = [];
  private _filterInput: string = "0";
  get filterInput(): string {
    return this._filterInput;
  }
  set filterInput(value: string) {
    this._filterInput = value;
    console.log('Selected option changed:', value);
  }
  filterOptions: any[] = [
    {
      value: 0,
      text: "All"
    },
    {
      value: 1,
      text: "Finished"
    },
    {
      value: 2,
      text: "Uncompleted"
    },
  ]

  get ToDoList(): TodoItem[]{
    if (this.filterInput === '0') {
      return this._ToDoList;
    } else {
      const filterStatus = this.filterInput === '1';
      return this._ToDoList.filter(item => item.status === filterStatus);
    }
  }

  set ToDoList(todoItem: TodoItem){
    this._ToDoList.push(todoItem);
  }

  createToDo(){
    if (this.inputData.trim()) {
      this.ToDoList = new TodoItem(this.inputData);
      this.inputData = "";
    }
  }

  onStatusChange(item: TodoItem) {
    item.status = !item.status;
  }
}
