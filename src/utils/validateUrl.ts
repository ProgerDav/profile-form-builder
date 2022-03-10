const validateUrl = (value: string) => {
  if (value.match(/^https?:\/\/([\w\d-]+\.)+\w{2,}(\/.+)?$/)) {
    return value;
  }

  return false;
};

export default validateUrl;
