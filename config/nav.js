import { LuShoppingCart } from "react-icons/lu";
import { BiBookmarkHeart } from "react-icons/bi";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBox } from "react-icons/bs";

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
    title: "account",
    href: "/account",
    icon: <FaUser size={28} className="hidden md:block" />,
  },
];

export const mobileNavItems = [
  { id: "home", icon: FaHome, label: "Home" },
  { id: "search", icon: CiSearch, label: "Search" },
  { id: "products", icon: BsBox, label: "Product" },
  { id: "cart", icon: FaShoppingCart, label: "Cart" },
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
