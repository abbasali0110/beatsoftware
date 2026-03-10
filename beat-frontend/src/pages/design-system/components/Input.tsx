import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, placeholder, ...props }: InputProps) => (
  <div className="flex flex-col gap-2 w-full">
    {label && (
      <label className="text-2xs font-bold text-surface-400 uppercase tracking-[0.15em] ml-1">
        {label}
      </label>
    )}
    <input
      type="text"
      placeholder={placeholder}
      className="bg-charcoal-dark border border-surface-700 text-surface-100 text-sm px-4 py-2.5 rounded-sm 
                 focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/40 
                 transition-all placeholder:text-surface-600 font-sans"
      {...props}
    />
  </div>
);
