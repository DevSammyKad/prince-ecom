import React from 'react';
import DashboardNavigation from '../components/dashboard/DashboardNavigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { Menu, Search, UserCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function DashboardLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== 'princeglow.india@gmail.com') {
    console.log('You are not authorized to access this page');
    return redirect('/');
  }

  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
      <header className="sticky top-0 flex bg-white mb-5 z-10 h-16 items-center justify-between gap-4 border-b">
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 lg:gap-6 md:text-sm">
          <DashboardNavigation />
        </nav>
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-4 text-lg font-medium mt-5">
              <DashboardNavigation />
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full outline-none focus:outline-none"
              variant="secondary"
              size="icon"
            >
              <UserCircle className="w-5 h-5 outline-none focus:outline-none" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              {user.family_name || 'My Account'}
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      {children}
    </div>
  );
}
