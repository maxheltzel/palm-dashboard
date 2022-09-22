import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <div className="p-6 flex justify-between items-center sticky bg-[#121212] top-0 z-20">
      {/* Logo */}
      <img src="/assets/images/logo.png" alt="logo" />

      {/* Search input */}
      <div className="max-w-2xl w-full lg:max-w-md border-gradient">
        <div className="relative">
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
            <Icon icon="ant-design:search-outlined" className="text-gray-400" />
          </div>

          <input
            id="search"
            name="search"
            className="
            block
            w-full
            pl-12
            pr-6
            py-2
            border border-transparent
            leading-5
            bg-[#2d2d2d]
            text-gray-300
            placeholder-gray-400
            focus:outline-none focus:bg-gray-600 focus:text-gray-200
            sm:text-sm
            rounded-3xl
          "
            placeholder="Search Collection"
            type="search"
          />
        </div>
      </div>

      {/* Connect wallet */}
      <div
        className="relative flex items-center lg:max-w-sm rounded-3xl bg-[#2d2d2d]"
      >
        <div className="flex items-center px-4">
          <Icon icon="carbon:dot-mark" className="text-[#53F3C3]" />
          <p className="text-white">ETH</p>
        </div>
        <button
          className="
          static
          right-0
          py-2
          px-8
          rounded-3xl
          bg-[#4b4b4b]
          text-white text-sm
          transition-all
          hover:bg-gray-700
        "
        >
          Connect wallet
        </button>
      </div>
    </div>
  );
}