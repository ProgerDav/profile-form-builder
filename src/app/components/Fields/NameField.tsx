import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import dotAccessor from "../../../utils/dotAccessor";
import getMessageForError from "../../../utils/getMessageForError";

import { FieldProps } from "./types";

function NameField({
  field: {
    type,
    details: { label, required },
  },
  id,
}: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = `${type.toString() + "_name"}.${"f_" + id}` as const;
  const fieldMiddleName = `${type.toString() + "_middlename"}.${
    "f_" + id
  }` as const;
  const fieldLastName = `${type.toString() + "_lastname"}.${
    "f_" + id
  }` as const;

  const fieldNameError = dotAccessor(errors, fieldName);
  const fieldMiddleNameError = dotAccessor(errors, fieldMiddleName);
  const fieldLastNameError = dotAccessor(errors, fieldLastName);

  return (
    <Box my={5}>
      <Text fontSize="large">{label}</Text>
      <Flex mt={3} justifyContent="space-between">
        <FormControl isRequired={required} isInvalid={!!fieldNameError?.type}>
          <FormLabel htmlFor={fieldName}>FirstName</FormLabel>
          <Input id={fieldName} {...register(fieldName, { required })} />
          <FormErrorMessage>
            {getMessageForError(fieldNameError?.type)}
          </FormErrorMessage>
        </FormControl>
        <FormControl mx={10} isInvalid={!!fieldMiddleNameError?.type}>
          <FormLabel htmlFor={fieldMiddleName}>MiddleName</FormLabel>
          <Input
            id={fieldMiddleName}
            {...register(fieldMiddleName, { required: false })}
          />
          <FormErrorMessage>
            {getMessageForError(fieldMiddleNameError?.type)}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired={required}
          isInvalid={!!fieldLastNameError?.type}
        >
          <FormLabel htmlFor={fieldLastName}>LastName</FormLabel>
          <Input
            id={fieldLastName}
            {...register(fieldLastName, { required })}
          />
          <FormErrorMessage>
            {getMessageForError(fieldLastNameError?.type)}
          </FormErrorMessage>
        </FormControl>
      </Flex>
    </Box>
  );
}

export default NameField;
