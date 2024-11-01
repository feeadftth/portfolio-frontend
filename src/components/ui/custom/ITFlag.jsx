import React from 'react';

const ITFlag = ({ isBW = false, width = 32, height = 24, ...props }) => {
    // Set colors based on greyscale mode
    const colorLeft = isBW ? '#bfbfbf' : '#009344'; // Grey or Green
    const colorCenter = isBW ? '#e6e6e6' : '#ffffff'; // Light Grey or White
    const colorRight = isBW ? '#a6a6a6' : '#cf2734'; // Dark Grey or Red

    return (
        <svg
            data-name="Italian Flag"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 24"
            width={width}
            height={height}
            {...props}
        >
            <path
                d="M0 2.5093v18.9814A2.5092 2.5092 0 0 0 2.5093 24h8.1574V0H2.5093A2.5092 2.5092 0 0 0 0 2.5093Z"
                fill={colorLeft}
            />
            <path
                fill={colorCenter}
                d="M10.6667 0h10.6666v24H10.6667z"
            />
            <path
                d="M21.3333 0v24h8.1574A2.5092 2.5092 0 0 0 32 21.4907V2.5093A2.5092 2.5092 0 0 0 29.4907 0Z"
                fill={colorRight}
            />
        </svg>
    );
};

export default ITFlag;
