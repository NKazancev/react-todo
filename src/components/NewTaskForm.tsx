import { FC, FormEvent, useState } from 'react';

import { ITask } from '../task';

interface INewTaskForm {
  addTask: (task: ITask) => void;
}

const NewTaskForm: FC<INewTaskForm> = ({ addTask }) => {
  const [text, setText] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.match(/[^\s]/g)) {
      const time = Number(minutes) * 60 + Number(seconds);

      let task: ITask = {
        id: String(Math.random()).slice(2, 8),
        text: text.trim(),
        done: false,
        date: new Date(),
        paused: true,
        reversed: false,
        time: Number(minutes) * 60 + Number(seconds),
      };
      if (time === 0) {
        task = { ...task, reversed: false };
      } else {
        task = { ...task, reversed: true };
      }

      addTask(task);
      setText('');
      setMinutes('');
      setSeconds('');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <button type="submit" className="form__button">
        Add task
      </button>

      <input
        type="text"
        className="form__input form__input--text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="What needs to be done"
      />

      <p className="form__timer">
        <input
          type="number"
          className="form__input form__input--min"
          onChange={(e) => setMinutes(e.target.value)}
          value={minutes}
          placeholder="min"
        />
        <input
          type="number"
          className="form__input form__input--sec"
          onChange={(e) => setSeconds(e.target.value)}
          value={seconds}
          placeholder="sec"
        />
      </p>
    </form>
  );
};

export default NewTaskForm;
