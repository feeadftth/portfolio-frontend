import React from 'react';
import clsx from 'clsx'; // Optional, but helpful for combining class names

// Define default Tailwind classes for each typography variant
const variantClasses = {
    h1: 'text-8xl font-bold mb-4',
    h2: 'text-3xl font-bold mb-2',
    h3: 'text-2xl font-bold mb-2',
    h4: 'text-xl font-bold mb-2',
    h5: 'text-lg font-bold mb-2',
    p: 'text-base my-2',
};


const Typography = ({
    variant = 'p',
    className = '',
    color = 'text-foreground',
    children,
    ...props
}) => {
    const Component = variant; // Use the variant as the HTML tag

    // Combine the base Tailwind classes with any custom classes passed in
    const combinedClasses = clsx(variantClasses[variant], color, className);

    return (
        <Component className={combinedClasses} {...props}>
            {children}
        </Component>
    );
};

export default Typography;
