import React from 'react';

const AddingModal = () => {

    const handleAdding=event=>{
        event.preventDefault();
        const form=event.target;
        const taskName= form.task.value;
        const photo= form.photo.value;
        const date=form.date.value;
        console.log(taskName,photo,date);
    }
    return (
        <>
            <input type="checkbox" id="adding-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="adding-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Add your Task!</h3>
                    <form onSubmit={handleAdding} className='grid grid-cols-1 gap-2 mt-6'>
                    <input name='task' type="text" placeholder="Task Name" className="input input-bordered w-full" />
                    <input name='photo' type="file" className="file-input file-input-bordered file-input-dark w-full " />
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