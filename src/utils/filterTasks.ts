import { ITask } from '../task';

export default function filterTasks(items: Array<ITask>, itemsFilter: string) {
  return items.filter((task) => {
    switch (itemsFilter) {
      case 'completed':
        return task.done;
      case 'active':
        return !task.done;
      default:
        return items;
    }
  });
}
