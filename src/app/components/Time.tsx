import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Time({ update }: { update: string }) {
  return <>{dayjs.utc(update).tz("Asia/Tokyo").format("YYYY-MM-DD")}</>;
}
