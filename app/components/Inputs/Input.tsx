'use client';

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input : React.FC<InputProps> = ({id, label, type, disabled, required, register, errors}) => {

    return (
        <div>
            <label htmlFor={id}> {label} </label>
            <div>
                <input id={id} type={type} disabled={disabled} required={required} {...register(id, { required })} className={clsx("w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", errors[id] ? "border-red-500" : "border-gray-300", disabled && "opacity-50 cursor-not-allowed")} />
            </div>
        </div>
    )
}

export default Input;