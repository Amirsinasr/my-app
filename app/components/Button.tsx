'use client';

import clsx from "clsx";

interface ButtonProps {
    children?: React.ReactNode;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button : React.FC<ButtonProps> = ({children, fullWidth, type, onClick, secondary, danger, disabled}) => { 

return (
    <button onClick={onClick} type={type} disabled={disabled} className={clsx(`flex items-center justify-center rounded-md px-4 py-2 transition w-full disabled:opacity-50 disabled:cursor-not-allowed`, 
    secondary ? "bg-neutral-100 text-black hover:bg-neutral-200" : "bg-sky-500 text-white hover:bg-sky-600",
    danger && "bg-red-500 text-white hover:bg-red-600", fullWidth && "w-full", disabled && "cursor-not-allowed opacity-50", !secondary && !danger && "bg-sky-500 text-white hover:bg-sky-600")}>
        {children}
    </button>
)
}

export default Button;