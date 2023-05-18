import React from 'react';

// Tables.
export const DefaultRow = (props: any) => {
  return <tr {...props} />;
};

export const DefaultCol = (props: any) => {
  return <td {...props} />;
};

export const DefaultTable = (props: any) => {
  return <table {...props} />;
};

// Forms.
export const DefaultInputGroup = (props: any) => {
  return <div {...props} />;
};

export const DefaultFormGroup = (props: any) => {
  return <div {...props} />;
};

export const DefaultLabel = (props: any) => {
  return <label {...props} />;
};

export const DefaultFormControl = React.forwardRef<HTMLInputElement, any>(
  (props: any, ref) => {
    return <input {...props} ref={ref} />;
  }
);

export const DefaultSelect = React.forwardRef<HTMLSelectElement, any>(
  (props: any, ref) => {
    return <select {...props} ref={ref} />;
  }
);

export const DefaultHelperText = (props: any) => {
  return <small {...props} />;
};

export const DefaultCheckbox = React.forwardRef<HTMLInputElement, any>(
  (props: any, ref) => {
    return <input {...props} ref={ref} />;
  }
);

// Buttons.
export const DefaultButton = (props: any) => {
  return <button {...props} />;
};

export const DefaultButtonGroup = (props: any) => {
  return <div {...props} />;
};
