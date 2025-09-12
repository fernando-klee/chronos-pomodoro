import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../contexts/TaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  function handleClick() {
    setState(prevState => ({
      ...prevState,
      formattedSecondsRemaining: '21:00'
    })
    )
  }

  return (
    <form className='form' action="">
      <button onClick={handleClick} type="button">Clicar</button>
      <div className="formRow">
        <DefaultInput
          labelText='task'
          id='meuIput'
          type='text'
          placeholder='Digite algo'
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