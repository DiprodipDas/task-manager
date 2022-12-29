import React from 'react';
import taskImg from '../../../assets/hometask.jpg'

const Home = () => {
    return (
        <div className='mx-5'>
           <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={taskImg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Here is your daily task manager</h1>
      <p className="py-6">Task manager helps you to manage your time management and your daily workflow.So,why are you wait for?</p>
      <button className="btn btn-success">Add Task</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;