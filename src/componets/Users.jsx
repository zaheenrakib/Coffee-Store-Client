import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();

    return (
        <div>
            <h2>Users: {loadedUsers.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Eamil</th>
                            <th>Create At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedUsers.map(user => (
                                <tr key={user._id}>
                                    <td></td>
                                    <td>{user.email}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;