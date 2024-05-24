import React from 'react';
import '../css/results.css'
const Results = ({ userAnswers }) => {
    return (
        <div id="results">
            <table id="results-table">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {userAnswers.map((answer, index) => (
                        <tr key={index}>
                            <td>Question {index + 1}</td>
                            <td>{answer ? answer : 'No answer'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
