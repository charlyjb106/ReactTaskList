import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL);

    const changeState = (id) => {

        console.log('TODO: change task`s state');

    }

    return (
        <div>

           <div>
           <h1>
            Your tasks:
            </h1>

           </div>
           <TaskComponent task={defaultTask}></TaskComponent>
            
        </div>
    );
};




export default TaskListComponent;
