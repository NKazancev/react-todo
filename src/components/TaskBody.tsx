import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { ITask } from '../task';

const TaskBody: FC<Pick<ITask, 'id' | 'done' | 'text' | 'date' | 'edit' | 'onComplete'>> = ({
  id,
  done,
  edit,
  text,
  date,
  onComplete,
}) => {
  let taskClass = 'task__item';
  if (done) taskClass += ' completed';

  return (
    <>
      <div className={!edit ? taskClass : 'hidden'}>
        <input
          type="checkbox"
          id={id}
          className="task__checkbox"
          checked={done}
          onChange={onComplete}
        />
        <label htmlFor={id} className="task__label">
          {text}
        </label>
      </div>

      <div className="task__date">
        {`created ${formatDistanceToNow(date, {
          includeSeconds: true,
          addSuffix: true,
        })}`}
      </div>
    </>
  );
};

export default TaskBody;
