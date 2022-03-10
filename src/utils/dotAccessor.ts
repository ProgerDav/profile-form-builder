const dotAccessor = (
  obj: Record<string, any>,
  accessor: string
): Record<string, any> => {
  const steps = accessor.split(".");

  if (!obj[steps[0]]) {
    return {};
  }

  if (steps.length === 1) {
    return obj[steps[0]];
  }

  return dotAccessor(obj[steps[0]], steps.slice(1).join("."));
};

export default dotAccessor;
