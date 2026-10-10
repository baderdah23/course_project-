const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/** "2021-10-10" -> "Oct 10, 2021" */
export const formatDate = (iso: string) => dateFormatter.format(new Date(iso));
