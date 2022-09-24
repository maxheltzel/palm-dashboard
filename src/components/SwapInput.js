import { createElement } from "react";

export default function SwapInput({ value, onChange, startAdornment }) {
  return (
    <div className="w-full mt-3">
      <div className="relative">
        {createElement(startAdornment)}

        <input
          className="
            w-full
            pl-28
            pr-6
            py-3
            border border-[#575757]
            bg-[#121212]
            text-2xl text-gray-300
            font-bold
            placeholder-gray-400
            focus:outline-none focus:text-gray-200
            rounded-2xl
            direction-rtl
          "
          placeholder="0"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}