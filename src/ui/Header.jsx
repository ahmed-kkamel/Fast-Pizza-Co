import React from "react";
import { Link } from "react-router-dom";
import SearchingOrder from "../features/order/SearchingOrder";
import UserName from "../features/user/UserName";
const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchingOrder />
      <UserName />
    </header>
  );
};

export default Header;
