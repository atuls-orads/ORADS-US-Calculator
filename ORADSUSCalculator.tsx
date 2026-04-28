import React, { useState } from 'react';

const ORADSUSCalculator = () => {
    const [age, setAge] = useState('');
    const [size, setSize] = useState('');
    const [riskResult, setRiskResult] = useState('');

    const calculateRisk = () => {
        let risk = 'Low';
        if (size > 5) {
            risk = 'High';
        } else if (age > 50) {
            risk = 'Medium';
        }
        setRiskResult(risk);
    };

    return (
        <div>
            <h1>O-RADS Ultrasound Calculator</h1>
            <label>
                Age:
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                />
            </label>
            <label>
                Size of the lesion (cm):
                <input 
                    type="number" 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)} 
                />
            </label>
            <button onClick={calculateRisk}>Calculate Risk</button>
            <h2>Risk Assessment: {riskResult}</h2>
        </div>
    );
};

export default ORADSUSCalculator;