const formatAPIValidationMessage = (message) => {
  const messageFormatted = message
    .split(" ")
    .map((word) =>
      word.startsWith("body.") ? word.slice(5, word.length) : word
    )
    .join(" ");

  return (
    messageFormatted.charAt(0).toUpperCase() + messageFormatted.slice(1) + "."
  );
};

export default formatAPIValidationMessage;
