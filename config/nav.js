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
    icon: <LuShoppingCart size={28} className="hidden md:block" />,
  },
  {
    title: "sign in",
    href: "/account",
    icon: <MdAccountCircle size={28} className="hidden md:block" />,
  },
];

export const items = [
  { name: "Home", href: "/" },
  { name: "Viral Gadgets", href: "/viral-gadgets" },
  { name: "Kids", href: "/kids" },
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "Corporate Gifting", href: "/corporate-gifting" },
  { name: "Birthday Gifts", href: "/birthday-gifts" },
  { name: "Anniversary Gifts", href: "/anniversary-gifts" },
];
