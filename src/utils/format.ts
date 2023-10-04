export const formatStringRequest = (value: string | null): string | null => {
  if (value) {
    const valueTrimmed = value.trim();
    if (valueTrimmed.length > 0) {
      return valueTrimmed;
    }
  }
  return null;
};
