import {
  Popover,
  PopoverBody,
  PopoverHeader,
  PopoverArrow,
  PopoverTrigger,
  Portal,
  PopoverContent,
  Button,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";

type Props = {
  onConfirm: () => void;
};

function ConfirmableDelete({ onConfirm }: Props) {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <Button colorScheme="red" onClick={onOpen}>
          Delete
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Are you sure?</PopoverHeader>
          <PopoverBody display="flex">
            <Button colorScheme="red" onClick={handleConfirm}>
              Yes
            </Button>
            <Spacer />
            <Button colorScheme="gray" onClick={onClose}>
              Cancel
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
export default ConfirmableDelete;
