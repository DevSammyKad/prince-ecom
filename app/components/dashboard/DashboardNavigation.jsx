'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
  },
  {
    name: 'Products',
    href: '/dashboard/products',
  },
  {
    name: 'Banner Ads',
    href: '/dashboard/banner',
  },
];
const DashboardNavigation = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            item.href === pathName ? 'text-blue-500' : 'text-muted-foreground'
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNavigation;
