import React, { RefObject, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";

import { TextInputBaseProps } from "../TextInputBase/TextInputBase";
import TextInputBase from "../TextInputBase/TextInputBase";
import { TextInput as TextInputRef } from "react-native";

interface Props extends Omit<TextInputBaseProps, "value"> {}

const TextInput = (
  { name, control, label, defaultValue = "", onFocus, onBlur, ...props }: Props,
  ref: RefObject<TextInputRef>
) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, value, onChange }, fieldState: { error } }) => {
        return (
          <TextInputBase
            name={name}
            value={value}
            onChangeText={onChange}
            control={control}
            label={label}
            ref={ref}
            error={error}
            {...props}
          />
        );
      }}
    />
  );
};

export default React.forwardRef(TextInput);
