import { FC } from 'react';

import Filters from './Filters';

interface ITools {
  total: number;
  filter: string;
  setFilter: (filter: string) => void;
  clearTasks: () => void;
}

const Tools: FC<ITools> = ({ total = 0, filter = 'all', setFilter, clearTasks }) => {
  return (
    <div className="tools">
      <span className="tools__stat">
        Uncompleted <br /> tasks: {total}
      </span>

      <Filters setFilter={setFilter} filter={filter} />

      <button type="button" className="tools__button tools__button--clear" onClick={clearTasks}>
        Clear completed
      </button>
    </div>
  );
};

export default Tools;
