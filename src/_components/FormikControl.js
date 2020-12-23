import React from "react";
import { Select } from "./Select";
import { RadioButtons } from "./RadioButton";
import { CheckboxGroup } from "./CheckboxGroup";
import { DatePicker } from "./DatePicker";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export { FormikControl };
