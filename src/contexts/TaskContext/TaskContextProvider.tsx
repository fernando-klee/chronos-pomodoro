import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
}

export function TaksContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  type ActionType = {
    type: string,
    payload?: number
  }

  const [myState, dispatch] = useReducer((state, action: ActionType) => {
    console.log(state, action);

    switch (action.type) {
      case 'INCREMENT': {
        if (!action.payload) return state;
        return {
          ...state, secondsRemaining: state.secondsRemaining + action.payload,
        }
      }
      case 'DECREMENT': {
        if (!action.payload) return state;
        return {
          ...state, secondsRemaining: state.secondsRemaining - action.payload,
        }
      }
      case 'RESET':
        return {
          secondsRemaining: 0
        }
    }

    return state;
  }, {
    secondsRemaining: 0,
  })


  // useEffect(() => {
  //   console.log(state);
  // }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O estado é {JSON.stringify(myState)}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>Incrementar +10</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 20 })}>Incrementar +20</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>Decrementar -10</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </TaskContext.Provider>
  )
}