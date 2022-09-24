import { useState } from "react";
import SwapInput from "../../../components/SwapInput";
import { REGEX_NUMBER_VALID } from "../../../utils/constants";

const UNSTAKE_PERCENTAGES = [25, 50, 75, 100];

export default function UnstakeTab({ availableAmount = 55.01912 }) {
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
        {/* Table */}
        <table className="min-w-full text-center">
          <thead className="bg-[#282828]">
            <tr className="text-md text-white">
              <th scope="col" className="font-light px-6 py-4 rounded-tl-xl rounded-bl-xl">
                Token
              </th>
              <th scope="col" className="font-light px-6 py-4">
                APY
              </th>
              <th scope="col" className="font-light px-6 py-4 rounded-tr-xl rounded-br-xl">
                Claimable Reward
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-white">
              <td className="text-md px-6 py-6">
                <div className="flex items-center">
                  <img src="/assets/images/fav_logo.png" alt="" width={20} />
                  <span className="ml-2">PLM</span>
                </div>
              </td>
              <td className="text-md px-6 py-6">
                277.05%
              </td>
              <td className="text-md px-6 py-6">
                5.92163
              </td>
            </tr>
          </tbody>
        </table>

        {/* Claim button */}
        <button
          className="rounded-xl border-2 border-[#006DEE] text-md text-[#006DEE] font-semibold w-full py-3 hover:bg-[#006DEE] hover:text-white transition-all"
          data-modal-toggle="stake-modal"
        >
          Claim Rewards
        </button>

        {/* Form */}
        <div className="mt-14">
          {/* label */}
          <div className="flex items-center justify-between">
            <span className="text-md text-white">Unstake</span>
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

        <div className="mt-4 flex items-center">
          {UNSTAKE_PERCENTAGES.map(percentageItem => (
            <button
              className={
                `w-16 rounded-lg text-sm text-white py-2 transition-all mr-2 ${percentageItem === percentage ? 'bg-[#006DEE]' : 'bg-[#363636] hover:bg-[#545468]'}`
              }
              key={percentageItem}
              onClick={() => handlePercentage(percentageItem)}
            >{percentageItem}%</button>
          ))}
        </div>
      </div>

      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end pt-16 pb-8 px-8 rounded-b-md">
        <button className="rounded-xl bg-[#006DEE] hover:bg-[#0051b4] transition-all py-3 w-full text-white font-semibold">
          Unstake
        </button>
      </div>
    </>
  );
}