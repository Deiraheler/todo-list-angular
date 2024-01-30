export class TodoItem{
  description: string;
  status: boolean;

  constructor(description: string = "") {
    this.description = description;
    this.status = false;
  }
}
