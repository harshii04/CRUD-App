interface StatCardProps {
  heading: string;
  statNum: number;
  increase: string;
}

const StatCard: React.FC<StatCardProps> = ({ heading, statNum, increase }) => {
  return (
    <div className="flex flex-col gap-4 px-3 py-4 border border-blueGray200 rounded-lg shadow-subtle w-full bg-[#fff]">
      <div>
        <h1 className="text-blueGray500 uppercase text-xs font-semibold">
          {heading}
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-3xl text-blueGray700">
          {statNum}
        </span>
        <p className="text-hilightGreen text-xs font-medium">{increase}</p>
      </div>
    </div>
  );
};

export default StatCard;
