import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Field,
  fieldTypeVariants,
  FieldType,
} from "../../features/builder/types";

type Props = {
  activeId: number;
  activeField: Field;
  isOpen: boolean;
  onClose: () => void;
  handleCreateField: (f: Field) => void;
  handleEditField: (id: number, f: Field) => void;
};

type FieldForm = {
  type: FieldType;
  label: string;
  visible: boolean;
  required: boolean;
  rows?: number;
  pattern?: string;
};

function FieldModal({
  onClose,
  isOpen,
  activeField,
  activeId,
  handleCreateField,
  handleEditField,
}: Props) {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FieldForm>();

  useEffect(() => {
    const {
      type,
      details: { label, required, visible, pattern, rows },
    } = activeField;
    reset({ type, label, required, visible, pattern, rows });
  }, [activeField, reset]);

  const selectedType = getValues().type;

  const onSubmit = ({
    type,
    required,
    visible,
    pattern,
    rows,
    label,
  }: FieldForm) => {
    if (activeId === -1) {
      handleCreateField({
        type,
        details: { required, visible, label, rows, pattern },
      });
    } else {
      handleEditField(activeId, {
        type,
        details: { required, visible, label, rows, pattern },
      });
    }

    handleClose();
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Field</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} id="field-form">
            <FormControl isInvalid={!!errors.label}>
              <FormLabel htmlFor="label">Label</FormLabel>
              <Input
                id="label"
                placeholder="label"
                {...register("label", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.label && errors.label.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.type}>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Select
                id="type"
                placeholder="type"
                {...register("type", {
                  required: "This is required",
                })}
              >
                {fieldTypeVariants.map((type) => (
                  <option value={type}>{type}</option>
                ))}
              </Select>
              <FormErrorMessage>
                {errors.type && errors.type.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <Checkbox {...register("required")}>Required Field</Checkbox>
            </FormControl>
            <FormControl>
              <Checkbox {...register("visible")}>Visible</Checkbox>
            </FormControl>
            {selectedType === FieldType.DATE && (
              <FormControl isInvalid={!!errors.pattern}>
                <FormLabel htmlFor="pattern">Pattern</FormLabel>
                <Input
                  id="pattern"
                  placeholder="dd-mm-yy"
                  {...register("pattern", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.pattern && errors.pattern.message}
                </FormErrorMessage>
              </FormControl>
            )}
            {selectedType === FieldType.TEXT && (
              <FormControl isInvalid={!!errors.rows}>
                <FormLabel htmlFor="rows">Rows</FormLabel>
                <Input
                  id="rows"
                  placeholder="rows"
                  {...register("rows", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.rows && errors.rows.message}
                </FormErrorMessage>
              </FormControl>
            )}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            form="field-form"
            type="submit"
            variant="solid"
            colorScheme="blue"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FieldModal;
