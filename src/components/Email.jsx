import React from 'react';

const Email = ({ currentStep, handleChange, email }) => {
    if (currentStep !== 1) {
        return null;
    }
    return (
        <div className="form-group">
            {' '}
            <label htmlFor="email">Email address</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={handleChange}
            />
        </div>
    );
};

export default Email;
