import React from 'react';
import { toast } from 'react-hot-toast';

const AddingModal = () => {

    const handleAdding=event=>{
        event.preventDefault();
        const form=event.target;
        const taskName= form.task.value;
        const photo= form.photo.value;
        const date=form.date.value;
        const email=form.email.value;
        // console.log(taskName,photo,date);
        const adding={
            taskName,
            photo,
            date,
            email,
        }
        console.log(adding);

        fetch('https://task-manager-server-alpha.vercel.app/addings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(adding)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success('Task Added Successfully')
        })
    }
    return (
        <>
            <input type="checkbox" id="adding-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="adding-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Add your Task!</h3>
                    <form onSubmit={handleAdding} className='grid grid-cols-1 gap-2 mt-6'>
                    <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    <input name='task' type="text" placeholder="Task Name" className="input input-bordered w-full" />
                    <input name='photo' type="text" placeholder="Image link" className="input input-bordered w-full" />
                    <input name='date' type="date" placeholder="" className="input input-bordered w-full" />
                    <br />
                    <input className='btn btn-success w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddingModal;