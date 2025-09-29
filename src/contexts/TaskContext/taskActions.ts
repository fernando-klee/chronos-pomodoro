import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
}

export type TaskActionModel = {
  type: TaskActionsTypes.START_TASK,
  payload?: TaskModel
}

