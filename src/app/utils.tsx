export function getDate({ date } : { date: Date}) {
    const shortMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const m = shortMonths[date.getMonth()];
    const d = date.getDate();
    const y = date.getFullYear();

    return m + " " + d + " " + y;
}