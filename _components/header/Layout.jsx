import Header from "./index";

const Layout = ({ children }) => {
  const navItems = [
    { icon: <FaUser />, href: "/account" },
    { icon: <FaShoppingCart />, href: "/cart" },
  ];

  return (
    <>
      <Header navItems={navItems} isSearch={true} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
