import React from 'react';
import addTask from '../../assets/addtask.jpg'
import AddingModal from './AddingModal';

const AddTask = () => {
    return (
        <div className=''>
          
           <img className='max-w-sm mx-auto' src={addTask} alt="" />
       <div className='mx-12'>
       <label htmlFor="adding-modal" className="btn btn-success mb-10 lg:ml-96">Add Your Task </label>
       </div>
       <AddingModal></AddingModal>
        </div>
    );
};

export default AddTask;