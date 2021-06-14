export function formatDate(date: string) {
  const parts = date.split(":");
  const [y, m, d] = parts.map((s) => parseInt(s, 10));

  return `${weekdays[new Date(y, m - 1, d).getDay()]}, ${
    months[m - 1]
  } ${d}, ${y}`;
}

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
