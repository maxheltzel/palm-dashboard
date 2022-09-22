import { Icon } from "@iconify/react";

export default function InfoCard({ icon, iconBgColorClass, iconColorClass, label, value, isMoney }) {
  return (
    <div
      className="rounded-2xl bg-[#2d2d2d] px-3 py-5 flex items-center"
    >
      {/* Icon */}
      <div className={`rounded-2xl px-2 py-4 ${iconBgColorClass}`}>
        <Icon icon={icon} className={`text-3xl ${iconColorClass}`} />
      </div>

      {/* label and value */}
      <div className="ml-2">
        <p className="text-sm text-[#9596A3] font-semibold">{label}</p>

        {isMoney ? (
          <div className="flex items-center">
            <Icon
              icon="material-symbols:attach-money"
              className="text-xl text-white font-bold"
            />
            <p className="text-md text-white font-semibold">{value}</p>
          </div>
        ) : (
          <p className="text-md text-white font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
}