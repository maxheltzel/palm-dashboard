import { useState } from "react";
import SwapInput from "../../../components/SwapInput";
import { REGEX_NUMBER_VALID } from "../../../utils/constants";

const UNSTAKE_PERCENTAGES = [25, 50, 75, 100];

export default function StakeTab({ availableAmount = 55.01912 }) {
  const [unstakeAmount, setUnstakeAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleUnstakeAmount = (e) => {
    if (e.target.value.match(REGEX_NUMBER_VALID)) {
      setUnstakeAmount(Number(e.target.value));
    }
  };

  const handlePercentage = (value) => {
    if (Number(value) !== percentage) {
      setPercentage(Number(value));
      setUnstakeAmount(availableAmount * Number(value) / 100);
    }
  };
  return (
    <>
      <div className="modal-body relative px-8">
        {/* description */}
        <p className="text-[#8B8CA7] text-sm">
          Single-Sided LIquidity Mining<br />
          First, you need to deposit your tokens into the liquidity pools.<br />
          Then use the returned Plm-LP or the USDC-LP tokens and stake them to the PLM/USDT liquidity pool on this page.
        </p>

        {/* info */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <span className="text-[#8B8CA7]">APY</span>
            <span className="text-white">36.38%</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-[#8B8CA7]">Claimable Rewards</span>
            <p className="text-white">
              <span className="text-[#00AF27]">0.00054 PLM</span> - $0.0022
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-14">
          {/* label */}
          <div className="flex items-center justify-between">
            <span className="text-md text-white">Stake</span>
            <span className="text-md text-[#8B8CA7]">Available: {availableAmount}</span>
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
                  <img src="/assets/images/usdc.png" alt="USDC" width="25" />
                  <span className="text-lg text-white font-semibold ml-2">USDC LP</span>
                </div>
              </div>
            )}
            value={unstakeAmount}
            onChange={handleUnstakeAmount}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#AEAEAE]">Amount staked</span>
          <span className="text-[#AEAEAE]">$100.00</span>
        </div>
      </div>

      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end pt-16 pb-8 px-8 rounded-b-md">
        <button className="rounded-xl bg-[#006DEE] hover:bg-[#0051b4] transition-all py-3 w-full text-white font-semibold">
          Stake
        </button>
      </div>
    </>
  );
}