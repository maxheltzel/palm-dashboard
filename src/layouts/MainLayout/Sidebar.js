import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

const ROUTES = [
  {
    icon: "humbleicons:dashboard",
    to: "/",
  },
  {
    icon: "ic:sharp-swap-horiz",
    to: "/swap",
  },
  {
    icon: "fluent:lock-closed-24-regular",
    to: "/staking",
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="fixed top-30 left-0 flex flex-col items-center pl-6 pr-8">
      {/* Home button */}
      <button className="mt-12 text-[#9596A3] text-2xl" to="/">
        <Icon icon="ant-design:home-outlined" />
      </button>

      {/* Other navigate links */}
      <div
        className="
        mt-8
        pt-3
        pb-6
        px-2
        rounded-3xl
        bg-[#2EB9FF]/[12%]
        flex flex-col
        items-center
      "
      >
        {ROUTES.map((routeItem, index) => (
          <Link
            key={index}
            className={
              routeItem.to === pathname ? `
                mt-3
                rounded-full
                bg-[#2EB9FF]
                py-2
                px-2
                text-lg text-white
                flex flex-col
                justify-center
              ` : 'mt-3 text-2xl text-white'
            }
            to={routeItem.to}
          >
            <Icon icon={routeItem.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}