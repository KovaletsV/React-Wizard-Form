import React from 'react';

const UserName = ({ currentStep, username, handleChange }) => {
    if (currentStep !== 3) {
        return null;
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    className="form-control"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-success float-right">Sign up</button>
        </React.Fragment>
    );
};

export default UserName;
