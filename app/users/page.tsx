import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: {
            revalidate: 10,
        },
    });
    const users: User[] = await resp.json();

    return (
        <>
            <h1>Users</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UsersPage;
