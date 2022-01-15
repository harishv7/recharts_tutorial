export const formatNumber = (number) => {
  return Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
};

export const formatDate = (data) => {
  return Date().;
};
