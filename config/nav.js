import { LuShoppingCart } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { BiBookmarkHeart } from "react-icons/bi";

export const mainNav = [
  {
    title: "wishlist",
    href: "/products?collection=Wishlist",
    icon: <BiBookmarkHeart size={28} className="hidden md:block" />,
  },
  {
    title: "cart",
    href: "/cart",
    icon: <LuShoppingCart size={28} />,
  },
  {
    title: "sign in",
    href: "/sign-in",
    icon: <MdAccountCircle size={28} className="hidden md:block" />,
  },
];
