import React from 'react';

type  PropsType = {
    value: number | string
    className:string
}

export const CounterValueV3: React.FC<PropsType> = ({value,className}) => {
    return (
        <div className={className}>
            <p>{value}</p>
        </div>
    );
};

