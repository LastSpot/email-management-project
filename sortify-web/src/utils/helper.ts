export function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatLabelName(name: string) {
  return `${process.env.PREFIX}-${capitalizeFirst(name.trim())}`;
}

export function getURL() {
  const url = process.env.NEXT_PUBLIC_APP_URL || "localhost:3000";
  return url.startsWith("http") ? url : `https://${url}`;
}
