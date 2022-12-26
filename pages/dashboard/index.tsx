import type { NextPage } from "next";
import Contents from "../../components/content/contentlist";

const Dashboard: NextPage = () => {
  /* Canvas */
  /* |- App */

  return (
    <main className="flex flex-col items-center ps-canvas">
      <div className="rounded-xl p-3 w-full max-w-4xl ps-app">
        <Contents />
      </div>
    </main>
  );
};

export default Dashboard;
