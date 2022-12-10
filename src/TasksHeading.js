import React from 'react';

function TasksHeading(props) {
    if (props.values.length === 0) {
        return (
            <p className='text-monospace text-xl text-center my-3'>You have No Tasks!</p>
        );
    }
    else {
        return (
            <p className='text-monospace text-xl text-center my-3'>You have {props.values.length} Tasks!</p>
        );
    }
    
}

export default TasksHeading;