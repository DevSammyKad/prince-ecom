import { LuShoppingCart, LuUser2 } from "react-icons/lu";
import { BiBookmarkHeart, BiGridAlt, BiSearchAlt2 } from "react-icons/bi";

import { RiHome4Line } from "react-icons/ri";

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
    icon: <LuUser2 size={28} className="hidden md:block" />,
  },
];

export const mobileNavItems = [
  { id: "home", icon: RiHome4Line, label: "Home" },
  { id: "search", icon: BiSearchAlt2, label: "Search" },
  { id: "products", icon: BiGridAlt, label: "Product" },
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
