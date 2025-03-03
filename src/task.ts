export interface ITask {
  id: string;
  text: string;
  done: boolean;
  date: Date;
  time: number;
  paused?: boolean;
  reversed?: boolean;
  timer?: NodeJS.Timeout;
  edit?: boolean;
  onComplete?: () => void;
  onEdit?: (id: string, stateText: string) => void;
  onDelete?: () => void;
  startTimer?: () => void;
  stopTimer?: () => void;
}
