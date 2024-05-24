import React from 'react';

const Question = ({ question }) => {
    return (
        
        <div id="question">
            
             {/*Aldığımız proptan soru cümlesini çekme*/} 

            <h2>Question : {question.title} ?</h2>
        </div>
    );
};

export default Question;
