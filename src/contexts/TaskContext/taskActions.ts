import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE'
}

export type TaskActionModel = | {
  type: TaskActionsTypes.START_TASK,
  payload?: TaskModel
} | {
  type: TaskActionsTypes.INTERRUPT_TASK
} | {
  type: TaskActionsTypes.RESET_STATE
}

