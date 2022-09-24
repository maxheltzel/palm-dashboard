import { Icon } from "@iconify/react";
import { useState } from "react";
import { STAKE, UNSTAKE } from "../../../utils/constants";
import UnstakeTab from "./UnstakeTab";

const classNameOfActiveTabButton = "bg-[#D7D7D7] text-[#1E1E1E] hover:bg-[#969494]";
const classNameOfInActiveTabButton = "bg-[#1e1e1e] text-[#d7d7d7] hover:bg-[#2e2d2d]";

export default function StakeModal({ id }) {
  const [currentTab, setCurrentTab] = useState(STAKE);

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div
      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id={id}
      tabIndex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#121212] bg-clip-padding rounded-xl outline-none text-current">
          {/* Header */}
          <div class="relative modal-header flex flex-shrink-0 items-center justify-center px-4 py-10 rounded-t-md">
            <div className="inline-flex" role="group">
              <button
                className={`${currentTab === STAKE ? classNameOfActiveTabButton : classNameOfInActiveTabButton} text-md font-bold py-1 w-32 rounded-l-lg transition-all`}
                onClick={() => handleCurrentTab(STAKE)}
              >
                Stake
              </button>
              <button
                className={`${currentTab === UNSTAKE ? classNameOfActiveTabButton : classNameOfInActiveTabButton} text-md font-bold py-1 w-32 rounded-r-lg transition-all`}
                onClick={() => handleCurrentTab(UNSTAKE)}
              >
                Unstake
              </button>
            </div>

            <button className="absolute top-5 right-5 text-white text-2xl" data-bs-dismiss="modal">
              <Icon icon="ep:close-bold" />
            </button>
          </div>

          {/* Body */}
          <UnstakeTab />
        </div>
      </div>
    </div>
  );
}