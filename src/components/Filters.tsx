import { FC } from 'react';

interface IFilters {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filters: FC<IFilters> = ({ filter = 'all', setFilter }) => {
  const btn = 'tools__button';
  const selectedBtn = 'tools__button selected';

  return (
    <div className="tools__filters">
      <button
        type="button"
        onClick={() => setFilter('all')}
        className={filter === 'all' ? selectedBtn : btn}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => setFilter('active')}
        className={filter === 'active' ? selectedBtn : btn}
      >
        Active
      </button>

      <button
        type="button"
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? selectedBtn : btn}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
