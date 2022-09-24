import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import SwapInput from "../../components/SwapInput";
import { REGEX_NUMBER_VALID, SWAP_RATIO } from "../../utils/constants";

export default function SwapPage() {
  const [swappingToken, setSwappingToken] = useState(0);
  const [swappedToken, setSwappedToken] = useState(0);

  const classNameOfSwapButton = useMemo(() => {
    if (swappingToken > 0) {
      return 'w-full mt-5 bg-[#006DEE] rounded-2xl text-white text-xl font-bold py-3 transition-all hover:bg-[#004DDD]';
    } else {
      return 'w-full mt-5 bg-[#1e1e1e] rounded-2xl text-[#aaaaaa] text-xl font-bold py-3';
    }
  }, [swappingToken]);

  const handleSwappingToken = (e) => {
    if (e.target.value.match(REGEX_NUMBER_VALID)) {
      setSwappingToken(Number(e.target.value));
      setSwappedToken(Number(e.target.value) * SWAP_RATIO);
    }
  };

  const handleSwappedToken = (e) => {
    if (e.target.value.match(REGEX_NUMBER_VALID)) {
      setSwappedToken(Number(e.target.value));
      setSwappingToken(Number(e.target.value) / SWAP_RATIO);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div
        className="max-w-md mx-auto rounded-3xl px-6 py-6 border-2 border-[#8D8D8D]"
      >
        <div className="flex justify-end">
          {/* Setting button */}
          <button
            className="
            text-2xl text-white
            font-bold
            bg-[#3B3C4E]
            rounded-lg
            p-2
            transition-all
            hover:bg-gray-600
          "
          >
            <Icon icon="ant-design:setting-outlined" />
          </button>
        </div>

        {/* Input Swapping token */}
        <div className="mt-5">
          {/* label */}
          <div className="flex items-center justify-between">
            <span className="text-md text-[#8B8CA7]">Pay</span>
            <span className="text-md text-[#8B8CA7]">Available 500</span>
          </div>

          {/* input */}
          {<SwapInput
            startAdornment={() => (
              <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <div className="flex items-center">
                  <img
                    src="/assets/images/ethereum.png"
                    alt="BUSD"
                    width="25"
                  />
                  <span className="text-lg text-white font-bold ml-2">ETH</span>
                </div>
              </div>
            )}
            value={swappingToken}
            onChange={handleSwappingToken}
          />}
        </div>

        {/* Swap icon */}
        <div className="flex justify-center mt-5">
          <Icon icon="bi:arrow-down-circle" className="text-2xl text-white" />
        </div>

        {/* Input swapped token */}
        <div className="mt-5">
          {/* label */}
          <div className="flex items-center justify-between">
            <span className="text-md text-[#8B8CA7]">Receive (Estimated)</span>
            <span className="text-md text-[#8B8CA7]">Available 1,200</span>
          </div>

          {/* input */}
          <SwapInput
            startAdornment={() => (
              <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <div className="flex items-center">
                  <img src="/assets/images/fav_logo.svg" alt="BUSD" width="25" />
                  <span className="text-lg text-white font-bold ml-2">Palm</span>
                </div>
              </div>
            )}
            value={swappedToken}
            onChange={handleSwappedToken}
          />
        </div>

        <div className="flex items-center justify-center mt-5">
          <span className="text-md text-[#8B8CA7]">1 BUSD = 1.0005 Palm</span>
          <Icon icon="heroicons-solid:refresh" className="text-white text-xl ml-3" />
        </div>

        {/* Button */}
        <button className={classNameOfSwapButton}>
          Confirm Order
        </button>

        <p className="text-md text-[#8B8CA7] text-center mt-1">
          Enter an amount to see more trading details
        </p>

        {/* Stake button */}
        <button
          className="
            flex
            items-center
            text-md text-[#8B8CA7]
            mt-5
            hover:text-white
            transition-all
          "
        >
          Stake
          <Icon icon="eva:question-mark-circle-outline" className="text-xl ml-1" />
        </button>
      </div>
    </div>
  );
}