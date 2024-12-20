import Header from "./Header";
import Statistic from "./Statistic";
import Table from "./Table";

function Dashboard() {
  return (
    <>
      <div className="px-6 w-full">
        <Header />
        <Statistic />
        <Table />
      </div>
    </>
  );
}

export default Dashboard;
