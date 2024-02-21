import { analytics } from "@/utils/analytics";

const Page = async () => {
  const pageview = await analytics.retrieveDays("pageview", 2);

  return (
    <div className="min-h-screen w-full flex py-12 justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4">Analytics</h1>
      </div>
    </div>
  );
};
export default Page;
