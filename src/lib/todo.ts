export class Item {
  readonly id: number
  private static autoIncrement = 0
  task: string
  done: boolean

  constructor(task: string, done = false) {
    this.id = Item.autoIncrement++
    this.task = task
    this.done = done
  }
}
