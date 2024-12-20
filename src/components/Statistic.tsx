import StatCard from "./StatCard";

function Statistic() {
  const statDataItems = [
    {
      heading: "Total account payable",
      statNum: 20.8,
      increase: "12% vs last month",
    },
    {
      heading: "Total account receivable",
      statNum: 14.4,
      increase: "12% vs last month",
    },
    {
      heading: "Total no. of sales invoice",
      statNum: 10.1,
      increase: "12% vs last month",
    },
    {
      heading: "Total no. of purchase",
      statNum: 9.2,
      increase: "12% vs last month",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 py-6">
        <h1 className="font-bold text-base text-brandBlue">Sales Dashboard</h1>
        <p className="text-blueGray500 text-sm">
          We fetch all your invoices automatically.
        </p>
      </div>
      <div className="flex gap-6 items-start justify-between">
        {statDataItems.map((item) => (
          <StatCard
            heading={item.heading}
            statNum={item.statNum}
            increase={item.increase}
          />
        ))}
      </div>
    </div>
  );
}

export default Statistic;
