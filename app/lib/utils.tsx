export function getDate({ date } : { date: Date}) {
    const shortMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const m = shortMonths[date.getMonth()];
    const d = date.getDate();
    const y = date.getFullYear();

    return m + " " + d + ", " + y;
}

export function formatDate(date: Date) {
if (!date) return "";
  const dateObj = date instanceof Date ? date : new Date(date);

  // Get local time in YYYY-MM-DDTHH:mm
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}