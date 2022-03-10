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

function UrlField({
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

  const fieldTitle = `${type.toString() + "_title"}.${"f_" + id}` as const;
  const fieldUrl = `${type.toString() + "_url"}.${"f_" + id}` as const;

  const fieldTitleError = dotAccessor(errors, fieldTitle);
  const fieldUrlError = dotAccessor(errors, fieldUrl);

  return (
    <Box my={5}>
      <Text fontSize="large">{label}</Text>
      <Flex mt={3} justifyContent="space-between">
        <FormControl
          mr={10}
          isRequired={required}
          isInvalid={!!fieldTitleError?.type}
        >
          <FormLabel htmlFor={fieldTitle}>Title</FormLabel>
          <Input
            id={fieldTitle}
            {...register(fieldTitle, {
              required,
            })}
          />
          <FormErrorMessage>
            {getMessageForError(fieldTitleError?.type)}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!fieldUrlError?.type} isRequired={required}>
          <FormLabel htmlFor={fieldUrl}>Url</FormLabel>
          <Input
            id={fieldUrl}
            {...register(fieldUrl, {
              required,
              pattern: {
                value: /^https?:\/\/([\w\d-]+\.)+\w{2,}(\/.+)?$/,
                message: "Input a valid URL!",
              },
            })}
          />
          <FormErrorMessage>
            {fieldUrlError?.message || getMessageForError(fieldUrlError?.type)}
          </FormErrorMessage>
        </FormControl>
      </Flex>
    </Box>
  );
}

export default UrlField;
