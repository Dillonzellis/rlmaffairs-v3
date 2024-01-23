import { navItems } from "@/data/nav";

export const NavDesktop = () => {
  return (
    <div className="absolute left-7 bottom-8">
      <ul className="text-white">
        {navItems.map((item) => (
          <li key={item.label} className="italic text-5xl pb-2">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
