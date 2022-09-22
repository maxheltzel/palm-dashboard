import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { handleLongText } from '../../utils/functions';
import { UP } from '../../utils/constants';

export default function TableRow({ historyItem }) {
  const visibleContractAddress = useMemo(() => {
    return handleLongText(historyItem.contractAddress, 6, 3);
  }, [historyItem]);

  return (
    <div
      className="mt-4 bg-[#2d2d2d] rounded-xl px-4 py-6 flex items-center justify-between"
    >
      {/* date */}
      <span className="text-[#9596A3] text-sm">{historyItem.date}</span>

      {/* price in usd */}
      <div className="flex items-center">
        <span className="text-[#9596A3] text-sm">$ {historyItem.priceInUsd}</span>
        {historyItem.status === UP ? (
          <Icon
            icon="bi:graph-up-arrow"
            className="ml-2 text-lg text-[#4AFFDE]"
          />
        ) : (
          <Icon
            icon="bi:graph-down-arrow"
            className="ml-2 text-lg text-[#FF6370]"
          />
        )}
      </div>

      {/* price in eth */}
      <div className="flex items-center">
        <Icon icon="cib:ethereum" className="text-sm text-[#9596A3]" />
        <span className="text-[#9596A3] text-sm">{historyItem.priceInEth}</span>
      </div>

      <span className="text-[#9596A3] text-sm">{historyItem.priceInEth}</span>

      <span className="text-[#9596A3] text-sm">{historyItem.priceInEth}</span>

      <span className="text-[#9596A3] text-sm">{visibleContractAddress}</span>

      <button className="text-[#9596A3] text-md">
        <Icon icon="ant-design:share-alt-outlined" />
      </button>
    </div>
  );
}