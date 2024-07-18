export const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "₹150",

    description: "A beautiful, handcrafted earthen bottle for your beverages.",
    rating: 4.5,
    features: ["Handmade", "Eco-friendly", "Durable"],
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    isTrending: false,
    category: [
      {
        name: "kids",
      },
      {
        name: "household",
      },
    ],
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "₹200",

    description: "A versatile tumbler for your everyday hydration needs.",
    rating: 4.0,
    features: ["Insulated", "BPA-free", "Dishwasher safe"],
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    isTrending: true,
    category: [
      {
        name: "household",
      },
    ],
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "₹500",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    description: "A refill pack for your productivity-focused notebooks.",
    rating: 4.5,
    features: ["High-quality paper", "Fits most planners", "Eco-friendly"],
    isTrending: false,
    category: [
      {
        name: "men",
      },
      { name: "women" },
    ],
  },
  {
    id: 4,
    name: "Machined Pencil",
    href: "#",
    price: "₹450",
    category: "Stationery",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    description: "A precision-engineered mechanical pencil for professionals.",
    rating: 4.8,
    features: ["Durable", "Ergonomic", "Refillable"],
    isTrending: false,
    category: [
      {
        name: "kids",
      },
      {
        name: "stationery",
      },
      { name: "trending" },
    ],
  },
  {
    id: 5,
    name: "Travel Soap Container Box",
    href: "#",
    price: "₹49",

    description: "Soap container box for travel purpose.",
    rating: 4.5,
    features: ["Eco-friendly", "Durable"],
    imageSrc:
      "https://m.media-amazon.com/images/I/519mTmvllML._AC_UF1000,1000_QL80_.jpg",
    imageAlt: "soap container box",
    isTrending: true,
    category: [
      {
        name: "household",
      },
    ],
  },
  {
    id: 6,
    name: "Water Proof mobile cover pouch",
    href: "#",
    price: "₹109",

    description: "Water proof mobile cover pouch for your mobile phone.",
    rating: 4.0,
    features: ["Insulated", "BPA-free", "Dishwasher safe"],
    imageSrc: "https://gadgetspro.in/wp-content/uploads/2022/08/yry.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    isTrending: true,
    category: [
      {
        name: "household",
      },
    ],
  },
  {
    id: 7,
    name: "transparent Food Storage Container",
    href: "#",
    price: "₹149",

    imageSrc:
      "https://www.jiomart.com/images/product/original/rvzc5xas1s/home-pro-food-storage-container-transparent-container-capacity-300-ml-800ml-leak-proof-food-safe-freezer-safe-set-of-2-product-images-orvzc5xas1s-p602135042-0-202310011727.png?im=Resize=(420,420)",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    description: "A refill pack for your productivity-focused notebooks.",
    rating: 4.5,
    features: ["High-quality paper", "Fits most planners", "Eco-friendly"],
    isTrending: false,
    category: [
      {
        name: "men",
      },
      { name: "women" },
    ],
  },
  {
    id: 8,
    name: "Sticky notes",
    href: "#",
    price: "₹29",
    category: "Stationery",
    imageSrc:
      "https://5.imimg.com/data5/SELLER/Default/2024/5/417868016/JA/FK/NN/51081104/bja11402-2.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    description: "A precision-engineered mechanical pencil for professionals.",
    rating: 4.8,
    features: ["Durable", "Ergonomic", "Refillable"],
    isTrending: true,
    category: [
      {
        name: "kids",
      },
      {
        name: "stationery",
      },
    ],
  },
];

export const occasion = [
  {
    text: "BIRTHDAY",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663839412026-51a44cfadfb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D",
    link: "/products?collection=Occasions&occasion=birthday",
  },
  {
    text: "ANNIVERSARY / WEDDING",
    imageSrc:
      "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5nYWdlbWVudCUyMHJpbmd8ZW58MHx8MHx8fDA%3D",
    link: "/products?collection=Occasions&occasion=anniversary-wedding",
  },
  {
    text: "HOUSEWARMING",
    imageSrc:
      "https://images.unsplash.com/photo-1619727875848-64f3b23a4de4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBnaWZ0fGVufDB8fDB8fHww",
    link: "/products?collection=Occasions&occasion=housewarming",
  },
];
