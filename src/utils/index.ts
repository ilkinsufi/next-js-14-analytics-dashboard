import { format, subDays } from "date-fns";

export const getDate = (sub: number = 0) => {
  //   return new Date(new Date().getTime() - sub * 1000);
  const dateXDatsAgo = subDays(new Date(), sub);

  return format(dateXDatsAgo, "dd/MM/yyyy");
};
