/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export default function (props) {
	const { className, children, ...rest } = props;
	return (
		<button
			className={`
        py-2
        px-6
        rounded-sm
        self-start
        text-white
        bg-cy-blue
        duration-20
        border-solid border-2 border-transparent
        hover:border-gray-700 hover:bg-cy-blue
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
    `}
			{...rest}
		>
			{children}
		</button>
	);
}
