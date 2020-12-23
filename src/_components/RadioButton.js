import React from "react";
import { FastField, ErrorMessage } from "formik";
import { TextError } from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  console.log(props);

  return (
    <div className="form-control">
      <label>{label}</label>
      <FastField name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </FastField>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export { RadioButtons };
