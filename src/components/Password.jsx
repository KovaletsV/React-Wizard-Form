import React from 'react';

const Password = ({ currentStep, password, handleChange }) => {
    if (currentStep !== 2) {
        return null;
    }
    return (
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
            />
        </div>
    );
};

export default Password;
