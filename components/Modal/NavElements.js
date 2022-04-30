import Link from "next/link";
import NavData from "./NavData";

const NavList = NavData.map((element, index) => {
  return (
    <li className="w-full" key={index}>
      <Link href={element.url} className="w-full p-3">
        <a>{element.textContent}</a>
      </Link>
    </li>
  );
});

const NavElements = () => {
  return <ul className="flex flex-col">{NavList}</ul>;
};

export default NavElements;
