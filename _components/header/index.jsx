'use client';
import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { mobileNavItems } from '@/config/nav';
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';
import { SearchBar } from './components/SearchBar';
import { MobileNavButton } from './components/MobileNavButton';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LuShoppingCart, LuUser2 } from 'react-icons/lu';
import { CiUser } from 'react-icons/ci';

// Custom hooks
const useScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const tabMap = {
      '/': 'home',
      '/search': 'search',
      '/products': 'products',
      '/cart': 'cart',
      '/account': 'account',
    };
    setActiveTab(tabMap[pathname] || 'home');
  }, [pathname]);

  return [activeTab, setActiveTab];
};

// Main Header component
const Header = ({ navItems, isSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const router = useRouter();
  const isScrolled = useScrollEffect();
  const [activeTab, setActiveTab] = useActiveTab();
  const { isAuthenticated } = useKindeBrowserClient();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
      setShowMobileSearch(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'search') {
      setShowMobileSearch(true);
    } else {
      setShowMobileSearch(false);
      router.push(tab === 'home' ? '/' : `/${tab}`);
    }
  };

  useEffect(() => {
    document.body.style.overflow = showMobileSearch ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileSearch]);

  return (
    <div className="font-sans">
      <header className="bg-white text-gray-800 shadow-lg fixed top-0 w-full z-50 transition-all duration-300 p-2">
        <div className="container mx-auto flex justify-center md:justify-between items-center px-2">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/Bajaj-Logo.png"
              alt="logo"
              className="h-10 w-14 md:h-10 md:w-16"
            />
          </Link>
          {isSearch && (
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              handleKeyPress={handleKeyPress}
              isMobile={false}
            />
          )}
          <nav className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                      {item.icon}
                    </span>
                  </Link>
                ))}
              </>
            ) : (
              <>
                <Button variant="outline">
                  <RegisterLink>Sign Up</RegisterLink>
                </Button>
                <Button variant="outline">
                  <LoginLink>Sign In</LoginLink>
                </Button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around items-center py-2">
          {mobileNavItems.map((item) => (
            <MobileNavButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => handleTabClick(item.id)}
            />
          ))}
          {isAuthenticated ? (
            <>
              <MobileNavButton
                icon={LuShoppingCart}
                label="Cart"
                isActive={activeTab === 'Cart'}
                onClick={() => router.push('/cart')}
              />
            </>
          ) : (
            <>
              <button className="focus:outline-none">
                <div className="flex flex-col items-center">
                  <LuShoppingCart
                    size={24}
                    className={
                      activeTab === 'account'
                        ? 'text-blue-500'
                        : 'text-gray-600'
                    }
                  />
                  <span
                    className={`text-xs mt-1 text-blue-500 ${
                      activeTab === 'account'
                        ? 'text-blue-500'
                        : 'text-gray-600'
                    }`}
                  >
                    <LoginLink>Cart</LoginLink>
                  </span>
                </div>
              </button>
            </>
          )}
          {isAuthenticated ? (
            <>
              <MobileNavButton
                icon={LuUser2}
                label="account"
                isActive={activeTab === 'account'}
                onClick={() => router.push('/account')}
              />
            </>
          ) : (
            <>
              <button className="focus:outline-none">
                <div className="flex flex-col items-center">
                  <LuUser2
                    size={24}
                    className={
                      activeTab === 'account'
                        ? 'text-blue-500'
                        : 'text-gray-600'
                    }
                  />
                  <span
                    className={`text-xs mt-1 text-blue-500 ${
                      activeTab === 'account'
                        ? 'text-blue-500'
                        : 'text-gray-600'
                    }`}
                  >
                    <LoginLink>LogIn</LoginLink>
                  </span>
                </div>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Mobile search bar */}
      {showMobileSearch && (
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          isMobile={true}
          closeSearch={() => setShowMobileSearch(false)}
        />
      )}
    </div>
  );
};

export default Header;
