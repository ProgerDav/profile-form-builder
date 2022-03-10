import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

import dotAccessor from "../../../utils/dotAccessor";
import getMessageForError from "../../../utils/getMessageForError";

import { FieldProps } from "./types";

function TextField({
  field: {
    type,
    details: { rows, label, required },
  },
  id,
}: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = `${type.toString()}.${"f_" + id}` as const;

  const fieldError = dotAccessor(errors, fieldName);

  return (
    <FormControl my={5} isInvalid={!!fieldError?.type} isRequired={required}>
      <FormLabel htmlFor={fieldName}>{label}</FormLabel>
      <Textarea
        id={fieldName}
        rows={rows}
        {...register(fieldName, { required })}
      />
      <FormErrorMessage>
        {getMessageForError(fieldError?.type)}
      </FormErrorMessage>
    </FormControl>
  );
}

export default TextField;
