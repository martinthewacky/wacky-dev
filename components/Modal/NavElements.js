import Link from "next/link";
import NavData from "./NavData";

const NavList = NavData.map((element, index) => {
  return (
    <li className="w-full flex justify-center items-center" key={index}>
      <Link href={element.url} className="w-full h-full">
        <a className="w-full h-full text-center">
          <span className="w-full p-3 text-center">{element.textContent}</span>
        </a>
      </Link>
    </li>
  );
});

const NavElements = () => {
  return <ul className="flex flex-col">{NavList}</ul>;
};

export default NavElements;
