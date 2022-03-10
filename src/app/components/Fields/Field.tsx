import DateField from "./DateField";
import NameField from "./NameField";
import TextField from "./TextField";
import UrlField from "./UrlField";

import { FieldProps } from "./types";
import { FieldType } from "../../../features/builder/types";

function Field({ field, id }: FieldProps) {
  if (!field.details.visible) {
    return null;
  }

  return (
    <>
      {field.type === FieldType.TEXT && <TextField field={field} id={id} />}
      {field.type === FieldType.LINK && <UrlField field={field} id={id} />}
      {field.type === FieldType.DATE && <DateField field={field} id={id} />}
      {field.type === FieldType.NAME && <NameField field={field} id={id} />}
    </>
  );
}

export default Field;
