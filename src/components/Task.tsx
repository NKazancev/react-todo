import { FC, FormEvent, useState } from 'react';

import pen from '../assets/pen.svg';
import trash from '../assets/trash.svg';
import { ITask } from '../task';

import TaskBody from './TaskBody';
import TaskTimer from './TaskTimer';

const Task: FC<ITask> = ({
  id,
  done = false,
  text,
  date,
  time = 0,
  onComplete,
  onEdit,
  onDelete,
  startTimer,
  stopTimer,
}) => {
  const [stateText, setStateText] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);

  const editTask = () => {
    if (!done) {
      setStateText(text);
      setEdit((s) => !s);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onEdit!(id, stateText);
    setStateText('');
    setEdit((s) => !s);
  };

  return (
    <li className="task">
      {edit && (
        <form onSubmit={handleSubmit} className="task__form">
          <input
            type="text"
            className="task__input"
            onChange={(e) => setStateText(e.target.value)}
            value={stateText}
          />
        </form>
      )}

      <TaskBody id={id} edit={edit} done={done} text={text} date={date} onComplete={onComplete} />
      <TaskTimer time={time} startTimer={startTimer} stopTimer={stopTimer} />

      <button type="button" className="task__button" onClick={editTask}>
        <img src={pen} alt="pen-icon" />
      </button>
      <button type="button" className="task__button" onClick={onDelete}>
        <img src={trash} alt="trash-icon" />
      </button>
    </li>
  );
};

export default Task;
