import styles from './styles.module.css';

const ToDoItem = (props) => {
  const { id, task, status, onStatusClick } = props;

  return (
    <div class={styles.taskItem}>
      <div class={styles.taskDesc}>{task}</div>
      <div
        class={`${styles.taskStatus} ${status && styles.completed}`}
        onClick={() => onStatusClick(id)}>
        {status ? 'Done' : 'Pending'}
      </div>
    </div>
  );
};

export default ToDoItem;
