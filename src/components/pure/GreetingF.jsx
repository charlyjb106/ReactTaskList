import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {


    const [age, setage] = useState(29)

    const birthday = () => {
    
        setage(age+1)
    }

    return (
        <div>
        <h1>
            Hey {props.name}! from functional component
        </h1>

        <h2>
            You are: {age} years old!
        </h2>

        <div>
            <button onClick={birthday}>
                cumplir años
            </button>
        </div>

    </div>
    );
};


GreetingF.propTypes = {

    name:PropTypes.string,
};


export default GreetingF;
