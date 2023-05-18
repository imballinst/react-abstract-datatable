import React from 'react';

// Tables.
export const DefaultRow = (props: any): JSX.Element | null => {
  return <div {...props} />;
};

export const DefaultCol = (props: any): JSX.Element | null => {
  return <div {...props} />;
};

export const DefaultTable = (props: any): JSX.Element | null => {
  return <table {...props} />;
};

// Forms.
export const DefaultInputGroup = (props: any): JSX.Element | null => {
  return <div {...props} />;
};

export const DefaultFormGroup = (props: any): JSX.Element | null => {
  return <div {...props} />;
};

export const DefaultLabel = (props: any): JSX.Element | null => {
  return <label {...props} />;
};

export const DefaultFormControl = React.forwardRef<HTMLInputElement, any>(
  (props: any, ref): JSX.Element | null => {
    return <input {...props} ref={ref} />;
  }
);

export const DefaultSelect = React.forwardRef<any, any>(
  (props: any, ref): JSX.Element | null => {
    return <select {...props} ref={ref} />;
  }
);

export const DefaultHelperText = (props: any): JSX.Element | null => {
  return <small {...props} />;
};

export const DefaultCheckbox = React.forwardRef<HTMLInputElement, any>(
  (props: any, ref): JSX.Element | null => {
    return <input {...props} ref={ref} />;
  }
);

// Buttons.
interface DefaultButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    any
  > {
  [k: string]: any;
  variant?: string;
}

export const DefaultButton = (
  props: DefaultButtonProps
): JSX.Element | null => {
  return <button {...props} />;
};

export const DefaultButtonGroup = (props: any): JSX.Element | null => {
  return <div {...props} />;
};

// Icons.
export const DefaultIcon = (props: {
  icon: 'times' | 'sort' | 'sort-up' | 'sort-down';
}): JSX.Element | null => {
  return <span>{props.icon}</span>;
};
