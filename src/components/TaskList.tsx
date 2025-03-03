import { FC } from 'react';

import { ITask } from '../task';

import Task from './Task';

interface ITaskList {
  tasks: Array<ITask>;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  startTimer: (id: string) => void;
  stopTimer: (id: string) => void;
}

const TaskList: FC<ITaskList> = ({
  tasks,
  completeTask,
  deleteTask,
  editTask,
  startTimer,
  stopTimer,
}) => {
  const todos = tasks.map((task: ITask) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        text={task.text}
        done={task.done}
        date={task.date}
        time={task.time}
        onComplete={() => completeTask(task.id)}
        onDelete={() => deleteTask(task.id)}
        onEdit={editTask}
        startTimer={() => startTimer(task.id)}
        stopTimer={() => stopTimer(task.id)}
      />
    );
  });

  let className = 'list-container';
  if (!tasks.length) className += ' no-padding';

  return (
    <div className={className}>
      <ul className="list">{todos}</ul>
    </div>
  );
};

export default TaskList;
