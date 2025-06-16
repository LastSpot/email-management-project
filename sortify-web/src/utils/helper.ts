export function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatLabelName(name: string) {
  return `${process.env.PREFIX}-${capitalizeFirst(name.trim())}`;
}
