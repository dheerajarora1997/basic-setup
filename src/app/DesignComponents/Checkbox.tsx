import React, { useEffect, useRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  indeterminate,
  checked,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = !!indeterminate && !checked;
    }
  }, [indeterminate, checked]);

  return (
    <input
      type="checkbox"
      ref={ref}
      checked={checked}
      {...rest}
      className="cursor-pointer w-4 h-4 accent-blue-600"
    />
  );
};

export default Checkbox;
