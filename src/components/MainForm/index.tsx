import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";


export function MainForm() {
  //const [taskName, setTaskName] = useState('');
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCcyle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCcyle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptDate: null,
      duration: 1,
      type: nextCycleType
    }

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCcyle,
      secondsRemaining,
      formattedSecondsRemaining: '00:00',
      tasks: [...prevState.tasks, newTask]
    }))
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