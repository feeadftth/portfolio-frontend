import React from 'react';

const UKFlag = ({ isBW = false, width = 32, height = 24, ...props }) => {
    // Set colors based on greyscale mode
    const colorBackground = isBW ? '#e6e6e6' : '#fff'; // Light Grey or White
    const colorRed = isBW ? '#a6a6a6' : '#ce1124'; // Dark Grey or Red
    const colorBlue = isBW ? '#8c8c8c' : '#00247d'; // Medium Grey or Blue

    return (
        <svg
            data-name="UK Flag"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 24"
            width={width}
            height={height}
            {...props}
        >
            <defs>
                <clipPath id="a">
                    <rect width="32" height="24" rx="2.5047" style={{ fill: 'none' }} />
                </clipPath>
                <clipPath id="b">
                    <path style={{ fill: 'none' }} d="M0 0h32v24H0z" />
                </clipPath>
            </defs>
            <g style={{ clipPath: 'url(#a)' }}>
                <g style={{ clipPath: 'url(#b)' }}>
                    <path style={{ fill: colorBackground }} d="M31.992 23.961H0V.002h31.992v23.959z" />
                </g>
                <path style={{ fill: colorRed }} d="M31.994 9.589H17.908V.004h-3.845v9.585H.013v4.79h14.05v9.582h3.845v-9.582h14.086v-4.79z" />
                <g style={{ clipPath: 'url(#b)' }}>
                    <path style={{ fill: colorBlue }} d="M0 2.792v5.217h6.978L0 2.792zM3.85.001l-.102.007 9.047 6.8V.001H3.85z" />
                    <path style={{ fill: colorRed }} d="M10.738 7.976 0 .002v1.88l8.18 6.094h2.558z" />
                </g>
                <path style={{ fill: colorRed }} d="M21.262 15.985 32 23.959v-1.88l-8.179-6.094h-2.559z" />
                <path style={{ fill: colorBlue }} d="M0 21.209v-5.216h6.978L0 21.209zM3.85 24l-.102-.007 9.047-6.799V24H3.85z" />
                <path style={{ fill: colorRed }} d="M10.683 15.985.007 23.955l2.497.003 10.302-7.649v-.324h-2.123z" />
                <g style={{ clipPath: 'url(#b)' }}>
                    <path style={{ fill: colorBlue }} d="M32 2.791v5.216h-6.978L32 2.791zM28.15 0l.103.007-9.048 6.799V0h8.945z" />
                </g>
                <path style={{ fill: colorRed }} d="M31.99.011h-2.402L19.214 7.714v.27h2.195L31.99.011z" />
                <path style={{ fill: colorBlue }} d="M32 21.207v-5.216h-6.978L32 21.207zM28.15 23.998l.103-.006-9.048-6.8v6.806h8.945z" />
            </g>
        </svg>
    );
};

export default UKFlag;
