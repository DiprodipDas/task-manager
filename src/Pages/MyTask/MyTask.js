import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyTask = () => {
    const { user } = useContext(AuthContext);

    const url = `https://task-manager-server-alpha.vercel.app/addings?email=${user?.email}`;

    const { data: addings = [] } = useQuery({
        queryKey: ['addings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>My Task</h1>
            <hr className='mb-4' />

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Image url</th>
                            <th>Task Date</th>
                            <th>Mark as complete</th>
                            <th>Delete Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          addings.map((adding,i)=><tr>
                            <th>{i+1}</th>
                            <td>{adding.taskName}</td>
                            <td>{adding.photo}</td>
                            <td>{adding.date}</td>
                            <td><button className='btn btn-warning'>Complete</button></td>
                            <td><button className='btn btn-error'>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTask;