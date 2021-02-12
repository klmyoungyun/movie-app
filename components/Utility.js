export const trimText = (text = "", limit) =>
  text.length > limit ? `${text.slice(0, limit)} ...` : text;

export const formatDate = (date) => {
  const currentDate = new Date(date);
  return currentDate.toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
