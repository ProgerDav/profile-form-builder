import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import dotAccessor from "../../../utils/dotAccessor";
import getMessageForError from "../../../utils/getMessageForError";
import { FieldProps } from "./types";

function DateField({
  field: {
    type,
    details: { pattern, label, required },
  },
  id,
}: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldDate = `${type.toString()}.${"f_" + id}` as const;
  const fieldDateError = dotAccessor(errors, fieldDate);

  return (
    <FormControl
      my={5}
      isInvalid={!!fieldDateError?.type}
      isRequired={required}
    >
      <FormLabel htmlFor={fieldDate}>{label}</FormLabel>
      <Input
        placeholder={pattern}
        type="date"
        id={fieldDate}
        pattern={pattern}
        {...register(fieldDate, { required })}
      />
      <FormErrorMessage>
        {fieldDateError?.message || getMessageForError(fieldDateError?.type)}
      </FormErrorMessage>
    </FormControl>
  );
}

export default DateField;
