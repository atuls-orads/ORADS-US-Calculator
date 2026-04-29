import React, { useState } from 'react';

const ORADSUSCalculator = () => {
    const [age, setAge] = useState('');
    const [size, setSize] = useState('');
    const [riskResult, setRiskResult] = useState('');

    const calculateRisk = () => {
        const ageNum = Number(age);
        const sizeNum = Number(size);
        let risk = 'Low';

        if (sizeNum > 5) {
            risk = 'High';
        } else if (ageNum > 50) {
            risk = 'Medium';
        }

        setRiskResult(risk);
    };

    const getRiskColor = () => {
        switch(riskResult) {
            case 'High': return '#ff4444';
            case 'Medium': return '#ffaa00';
            case 'Low': return '#44aa44';
            default: return '#000';
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>O-RADS Ultrasound Calculator</h1>
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: '0.5rem', padding: '0.5rem', width: '150px' }} />
                </label>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Size of the lesion (cm):
                    <input type="number" value={size} onChange={(e) => setSize(e.target.value)} style={{ marginLeft: '0.5rem', padding: '0.5rem', width: '150px' }} />
                </label>
            </div>
            <button onClick={calculateRisk} style={{ display: 'block', margin: '1.5rem auto', padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Calculate Risk
            </button>
            {riskResult && (
                <h2 style={{ textAlign: 'center', color: getRiskColor(), marginTop: '2rem' }}>Risk Assessment: {riskResult}</h2>
            )}
        </div>
    );
};

export default ORADSUSCalculator;