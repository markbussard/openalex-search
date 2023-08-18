'use client';
import clsx from 'clsx';

export type TextInputProps = {
  label?: string;
  labelClassName?: string;
  error?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = (props: TextInputProps) => {
  const { id, label, error, className, labelClassName, ...rest } = props;
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            'block mb-2 text-sm font-bold text-gray-700',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          `px-3 py-2 text-sm leading-tight text-gray-700 border ${
            error && 'border-red-500'
          } rounded appearance-none focus:outline-none focus:shadow-outline`,
          className
        )}
        {...rest}
      />
      {error && <p className="text-xs italic text-red-500 mt-2">{error}</p>}
    </>
  );
};
