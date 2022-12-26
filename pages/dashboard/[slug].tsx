import type { NextPage } from "next";
import { useRouter } from "next/router";
import Contents from "../../components/content/contentlist";
import ContentProfile from "../../components/content/contentprofile";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    /* Canvas */
    /* |- App */
    <main className="flex flex-col items-center ps-canvas">
      <div className="rounded-xl p-3 w-full max-w-4xl ps-app">
        <ContentProfile slug={slug as string} />
      </div>
    </main>
  );
};

export default Dashboard;
