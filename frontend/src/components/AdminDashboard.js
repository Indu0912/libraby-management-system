import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Welcome to the Admin Dashboard</h2>
            <ul>
                <li>Manage Users</li>
                <li>Check Book Availability</li>
                <li>Issue a Book</li>
                <li>Return a Book</li>
                <li>View Pending Issue Requests</li>
                <li>View Overdue Books</li>
            </ul>
        </div>
    );
};

export default AdminDashboard;