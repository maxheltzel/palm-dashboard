import { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { Icon } from '@iconify/react';
import { PALM_TOKEN_ADDRESS, UP, DOWN } from "../../utils/constants";
import TableRow from "./TableRow";
import InfoCard from './InfoCard';
import { handleLongText } from '../../utils/functions';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const TOKEN_INFOS = [
  {
    icon: "material-symbols:attach-money",
    iconColorClass: "text-[#4AFFDE]",
    iconBgColorClass: "bg-[#4AFFDE]/[18%]",
    label: "Total Liquidity",
    value: "262000.56",
    isMoney: true,
  },
  {
    icon: "simple-line-icons:graph",
    iconColorClass: "text-[#4A6DFF]",
    iconBgColorClass: "bg-[#4A6DFF]/[18%]",
    label: "24 Hour Volume",
    value: "2372139.74",
    isMoney: true,
  },
  {
    icon: "fluent:lock-closed-24-regular",
    iconColorClass: "text-[#FFC14A]",
    iconBgColorClass: "bg-[#FFC14A]/[18%]",
    label: "Total Staked",
    value: "153234.80",
    isMoney: true,
  },
  {
    icon: "bx:group",
    iconColorClass: "text-[#9A4AFF]",
    iconBgColorClass: "bg-[#9A4AFF]/[18%]",
    label: "Holders",
    value: "1386",
    isMoney: false,
  },
  {
    icon: "ep:histogram",
    iconColorClass: "text-[#BE7BBB]",
    iconBgColorClass: "bg-[#BE7BBB]/[18%]",
    label: "Market Cap",
    value: "1153234",
    isMoney: true,
  },
  {
    icon: "icon-park-outline:shoulder-bag",
    iconColor: "#41709C",
    iconColorClass: "text-[#41709C]",
    iconBgColorClass: "bg-[#41709C]/[18%]",
    label: "Supply",
    value: "200000000",
    isMoney: false,
  },
];

const TRADE_HISTORIES = [
  {
    date: "21.05.10",
    priceInUsd: 981.47577,
    status: UP,
    priceInEth: 0.24984,
    contractAddress: PALM_TOKEN_ADDRESS,
  },
  {
    date: "21.05.10",
    priceInUsd: 981.47577,
    status: DOWN,
    priceInEth: 0.24984,
    contractAddress: PALM_TOKEN_ADDRESS,
  },
  {
    date: "21.05.10",
    priceInUsd: 981.47577,
    status: UP,
    priceInEth: 0.24984,
    contractAddress: PALM_TOKEN_ADDRESS,
  },
  {
    date: "21.05.10",
    priceInUsd: 981.47577,
    status: UP,
    priceInEth: 0.24984,
    contractAddress: PALM_TOKEN_ADDRESS,
  },
  {
    date: "21.05.10",
    priceInUsd: 981.47577,
    status: UP,
    priceInEth: 0.24984,
    contractAddress: PALM_TOKEN_ADDRESS,
  },
];

const DATA_OF_DOUGHNUT = {
  datasets: [
    {
      backgroundColor: ["#2EB9FF", "#404040"],
      borderColor: ["#2EB9FF", "#404040"],
      data: [45, 55],
    },
  ],
};

export default function HomePage() {
  const visibleTokenAddress = useMemo(() => {
    return handleLongText(PALM_TOKEN_ADDRESS, 6, 3);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 pb-12">
      <div className="col-span-1">
        {/* Trade */}
        <div className="flex items-center">
          {/* logo */}
          <div className="rounded-2xl bg-black border-2 border-white px-2 py-3">
            <img src="/assets/images/fav_logo.svg" alt="palm" width="40" />
          </div>

          {/* title and token address */}
          <div className="ml-5">
            <p className="text-white text-2xl font-bold">ETH/Palm</p>
            <p className="text-[#9596A3] text-md font-semibold">
              Palm Token {visibleTokenAddress}
            </p>
          </div>

          {/* trade button */}
          <button
            className="
            ml-12
            py-2
            px-6
            rounded-2xl
            text-xl text-white
            font-semibold
            border-2 border-[#9596A3]
            transition-all
            hover:bg-[#9596A3]
          "
          >
            Trade
          </button>
        </div>

        {/* Functional buttons */}
        <div className="mt-5 flex items-center">
          {/* look out button */}
          <button
            className="
            p-2
            text-2xl text-[#9596A3]
            rounded-xl
            border-2 border-[#9596A3]
            transition-all
            hover:bg-[#9596A3] hover:text-black
          "
          >
            <Icon icon="heroicons-solid:logout" />
          </button>

          {/* share button */}
          <button
            className="
            ml-2
            p-2
            text-2xl text-[#9596A3]
            rounded-xl
            border-2 border-[#9596A3]
            transition-all
            hover:bg-[#9596A3] hover:text-black
          "
          >
            <Icon icon="bxs:share-alt" />
          </button>
        </div>

        {/* Price */}
        <p className="mt-6 text-5xl text-white font-bold">
          983.47 <span className="text-3xl">USD</span>
        </p>
        <div className="mt-2 flex items-center">
          <Icon icon="cib:ethereum" className="text-lg text-[#9596A3]" />
          <p className="ml-1 text-[#9596A3] text-sm font-bold">0.24984</p>
        </div>

        {/* Cards of meta info */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {TOKEN_INFOS.map((tokenInfoItem, index) => (
            <div
              className="col-span-1"
              key={index}
            >
              <InfoCard
                icon={tokenInfoItem.icon}
                iconBgColorClass={tokenInfoItem.iconBgColorClass}
                iconColorClass={tokenInfoItem.iconColorClass}
                label={tokenInfoItem.label}
                value={tokenInfoItem.value}
                isMoney={tokenInfoItem.isMoney}
              />
            </div>
          ))}
        </div>

        {/* Tokens burnt to date */}
        <div className="mt-12 flex justify-between">
          <div className="mt-4">
            <p className="text-lg text-white font-semibold">Tokens Burnt to Date</p>
            <p className="text-4xl text-white font-bold">52%</p>
          </div>

          <div className="w-1/2">
            <Doughnut data={DATA_OF_DOUGHNUT} />
          </div>
        </div>
      </div>

      <div className="col-span-2">
        {/* Chart */}
        <div className="bg-[#2D2D2D] w-full h-96 rounded-2xl"></div>

        {/* Trade history */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-end">
            <p className="text-2xl text-white font-semibold">Trade History</p>
            <Icon
              icon="dashicons:arrow-down-alt2"
              className="ml-1 text-2xl text-white"
            />
          </div>

          <div className="flex items-center">
            <Icon icon="bi:funnel" className="text-white text-xl" />
            <p className="ml-3 text-md text-white font-semibold">ETH</p>
            <p className="ml-3 text-sm text-[#4D506A] font-semibold">
              Last 521 Trades
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-3">
          {TRADE_HISTORIES.map((tradeHistoryItem, index) => (
            <TableRow key={index} historyItem={tradeHistoryItem} />
          ))}
        </div>
      </div>
    </div>
  );
}