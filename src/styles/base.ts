export const styles = {
  card: {
    base: "rounded-lg border bg-white shadow-sm p-4",
    header: "space-y-1.5 p-4",
    title: "text-lg font-semibold",
    content: "p-4 pt-0",
  },
  alert: {
    base: "relative w-full rounded-lg border p-4",
    description: "text-sm [&:has(>_p)]:opacity-90",
  },
  skeleton: "animate-pulse rounded-md bg-muted",
  prayerTimes: {
    container: {
      vertical: "flex flex-col space-y-4",
      horizontal: "grid grid-cols-2 md:grid-cols-5 gap-4",
    },
    timeBlock:
      "flex items-center justify-between p-4 rounded-lg border bg-white",
    label: "text-sm font-medium text-gray-600",
    time: "text-base font-semibold",
  },
};
