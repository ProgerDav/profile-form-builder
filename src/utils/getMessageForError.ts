const ERROR_MESSAGES: Record<string, string> = {
  required: "This field is required!",
  isUrl: "Input a valid URL!",
};

const getMessageForError = (errorType: string) => {
  return ERROR_MESSAGES[errorType] ?? "Invalid data.";
};

export default getMessageForError;
