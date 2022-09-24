import { Icon } from "@iconify/react";

export default function PoolCard({ pairTokenImage, pairTokenName }) {
  return (
    <div className="rounded-2xl border border-[#4A4A4A] bg-[#1E1E1E] px-6 py-6">
      {/* Token logos and title */}
      <div className="flex items-center">
        {/* token logos */}
        <div className="relative">
          <img src={pairTokenImage} alt="usdc" width={40} className="relative z-20" />
          <div className="absolute top-0 left-7 bg-black rounded-full w-10 h-10 flex justify-center items-center z-10">
            <img
              src="/assets/images/fav_logo.png"
              alt="palm"
              width={28}
            />
          </div>
        </div>

        {/* title */}
        <p className="ml-12 text-2xl text-white font-semibold">
          {pairTokenName}-PLM LP
        </p>
      </div>

      {/* Ratio */}
      <div className="mt-8 flex justify-between">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-white font-semibold">25.70%</span>
          <span className="text-md text-white font-semibold">{pairTokenName} APR</span>
        </div>

        <span className="text-5xl text-white font-semibold">/</span>

        <div className="flex flex-col items-center">
          <span className="text-3xl text-white font-semibold">35.07%</span>
          <span className="text-md text-white font-semibold">Palm APR</span>
        </div>
      </div>

      {/* Infos */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <span className="text-[#8B8CA7] text-md">Reward Token</span>
          <div className="bg-black rounded-full w-7 h-7 flex justify-center items-center z-10">
            <img
              src="/assets/images/fav_logo.png"
              alt="palm"
              width={16}
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[#8B8CA7] text-md">Value Locked</span>
          <span className="text-md text-white">$635,577.11</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[#8B8CA7] text-md">My Share</span>
          <span className="text-md text-white">$0(0%)</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[#8B8CA7] text-md">Available Balance</span>
          <span className="text-md text-white">$0</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[#8B8CA7] text-md">My Reward</span>
          <div className="flex items-center">
            <span className="text-md text-white">$0</span>
            <Icon icon="ant-design:gift-outlined" className="ml-2 text-white text-xl" />
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <button
            className="rounded-xl w-full py-3 text-sm text-white font-semibold bg-[#006DEE] hover:bg-[#004DDD] transition-all"
            data-bs-toggle="modal" 
            data-bs-target="#stakeModal"
          >Stake{pairTokenName}</button>
        </div>
        <div className="col-span-1">
          <button
            className="rounded-xl w-full py-3 text-sm text-white font-semibold bg-[#363636] transition-all hover:bg-gray-700"
          >StakePLM</button>
        </div>
      </div>
    </div>
  );
}