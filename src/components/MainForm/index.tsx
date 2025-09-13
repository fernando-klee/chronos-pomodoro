import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef, useState } from "react";


export function MainForm() {
  //const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Deu certo');
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action="">
      <div className="formRow">
        <DefaultInput
          labelText='task'
          id='meuIput'
          type='text'
          placeholder='Digite algo'
          // value={taskName}
          // onChange={e => { setTaskName(e.target.value) }}
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25 min.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton color='green'>
          <PlayCircleIcon />
        </DefaultButton>
      </div>
    </form>
  )
}