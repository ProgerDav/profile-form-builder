import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { createField, editField, deleteField } from "./builderSlice";
import { Field } from "./types";

const useBuilderFields = () => {
  const fields = useAppSelector((state) => state.builder.fields);
  const dispatch = useAppDispatch();

  const handleCreateField = useCallback(
    (field: Field) => dispatch(createField(field)),
    [dispatch]
  );

  const handleEditField = useCallback(
    (id: number, field: Field) => dispatch(editField({ field, id })),
    [dispatch]
  );

  const handleDeleteField = useCallback(
    (id: number) => dispatch(deleteField(id)),
    [dispatch]
  );

  return { fields, handleCreateField, handleEditField, handleDeleteField };
};

export default useBuilderFields;
