import React, { useState } from 'react';
import Email from './components/Email';
import UserName from './components/UserName';
import Password from './components/Password';
import './index.css';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nextState = () => {
        setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1);
    };

    const prevState = () => {
        setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
    };

    function previousButton() {
        if (currentStep > 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={prevState}
                >
                    Previous
                </button>
            );
        }
        return null;
    }

    function nextButton() {
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={nextState}
                >
                    Next
                </button>
            );
        }
        return null;
    }
    const handleChange = e => {
        setEmail(([e.target.name] = [e.target.value]));
        setPassword(([e.target.name] = [e.target.value]));
        setUsername(([e.target.name] = [e.target.value]));
    };
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Your registration detail: \n
        Email: ${email} \n
        Username: ${username} \n
        Password: ${password}`);
    };

    return (
        <div className="App">
            <h1>React Wizzard Form</h1>
            <form onSubmit={handleSubmit}>
                <Email
                    currentStep={currentStep}
                    handleChange={handleChange}
                    email={email}
                />
                <UserName
                    currentStep={currentStep}
                    handleChange={handleChange}
                    username={username}
                />
                <Password
                    currentStep={currentStep}
                    handleChange={handleChange}
                    password={password}
                />
                {previousButton()}
                {nextButton()}
            </form>
        </div>
    );
}

export default App;
