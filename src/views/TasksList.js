import { Task } from '../components/Task';
import { useState } from 'react';
import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { version } from 'process';

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const TasksList = () => {
  const [idx, setIdx] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (title, value) => {
    setTasks([...tasks, { title, value, idx }]);
    setIdx(idx + 1);
  };

  const removeTask = (removeIdx) => {
    setTasks(tasks.filter((task) => task.idx !== removeIdx));
  };

  return (
    <TasksContainer>
      <Button variant="text" onClick={() => addTask('', '')}>
        Add task +
      </Button>
      <div>
        {tasks.map(({ title, value, idx }) => (
          <Task
            key={idx}
            idx={idx}
            title={title}
            value={value}
            handleRemove={removeTask}
          />
        ))}
      </div>
    </TasksContainer>
  );
};

export { TasksList };
