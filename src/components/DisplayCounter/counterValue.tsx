import React from 'react';

type  PropsType = {
    value: number | string
    className:string
}

const CounterValue: React.FC<PropsType> = ({value,className}) => {
    return (
        <div className={className}>
            <p>{value}</p>
        </div>
    );
};

export default CounterValue;