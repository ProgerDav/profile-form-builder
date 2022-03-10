import { useMemo, useState } from "react";

import {
  Center,
  List,
  ListItem,
  Text,
  Flex,
  Spacer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import useBuilderFields from "../features/builder/useBuilderFields";
import ConfirmableDelete from "../app/components/ConfirmableDelete";
import FieldModal from "../app/components/FieldModal";

function Constructor() {
  const [activeId, setActiveId] = useState(-1);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (id = -1) => {
    onOpen();
    setActiveId(id);
  };

  const { fields, handleCreateField, handleEditField, handleDeleteField } =
    useBuilderFields();

  const activeField = useMemo(
    () =>
      fields[activeId] || {
        type: "",
        details: { label: "", required: false, visible: false },
      },
    [fields, activeId]
  );

  return (
    <>
      <Center>
        <Text fontSize="3xl">Constructor Page</Text>
      </Center>

      <List spacing={3} mx="auto">
        {fields.map((f, i) => (
          <ListItem key={i} p={3} borderBottom="1px solid">
            <Flex alignItems="center">
              <Text fontSize="large"> {f.details.label}</Text> <Spacer />
              <Button
                colorScheme="whatsapp"
                mr={5}
                onClick={() => openModal(i)}
              >
                Edit
              </Button>
              <ConfirmableDelete onConfirm={() => handleDeleteField(i)} />
            </Flex>
          </ListItem>
        ))}
      </List>

      <FieldModal
        isOpen={isOpen}
        onClose={onClose}
        handleCreateField={handleCreateField}
        handleEditField={handleEditField}
        activeField={activeField}
        activeId={activeId}
      />

      <Center mt={80}>
        <Button colorScheme="blue" onClick={() => openModal()}>
          Create Field
        </Button>
      </Center>
    </>
  );
}

export default Constructor;
