import React from 'react';

const AddingModal = () => {
    return (
        <>
            <input type="checkbox" id="adding-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="adding-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Add your Task!</h3>
                    <form className='grid grid-cols-1 gap-2'>
                    <input type="text" placeholder="Type here" className="input mt-2 input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <br />
                    <input className='btn btn-success w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddingModal;