export const generateReply = (message: string): string => {
  const text = message.toLowerCase().trim();

  if (text === "hello") {
    return "Hello! How can I help you?";
  }

  if (text === "hi") {
    return "Hi! How are you?";
  }

  if (text === "thanks") {
    return "You're welcome!";
  }

  return "Sorry, I don't understand that.";
};