import React from 'react';

type  PropsType = {
    value: number
    className:string
}

const CounterValue: React.FC<PropsType> = ({value,className}) => {
    return (
        <div className={className}>
                {value}
        </div>

    );
};

export default CounterValue;