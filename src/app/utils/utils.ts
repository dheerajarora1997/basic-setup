export const getStatusColorCode = (status: string): string => {
  switch (status?.toLowerCase()) {
    case "review":
      return "warning";
    case "completed":
      return "success";
    case "prepare":
      return "info";
    case "failed":
      return "danger";
    default:
      return "primary";
  }
};

export const getPriorityColorCode = (priority: string): string => {
  switch (priority?.toLowerCase()) {
    case "high":
      return "danger";
    case "medium":
      return "warning";
    case "low":
      return "muted";
    default:
      return "primary";
  }
};

export const getDateInFormat = (date: Date): string => {
  const year = date?.getUTCFullYear();
  const month = date?.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
  const day = date?.getUTCDate();
  return `${day} ${month} ${year}`;
};
