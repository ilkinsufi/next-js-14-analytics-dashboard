import { analytics } from "@/utils/analytics";

const Page = async () => {
  const pageview = await analytics.retriveDays("pageview", 2);

  return <p>hello world</p>;
};
export default Page;
