'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogoIcon from '../LogoIcon';
import { motion } from "framer-motion";
import Image from 'next/image';
import { navItems } from '@/constants';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <nav className='sticky top-0 w-full z-50 backdrop-blur-sm'>
      <div className='relative'>
        <div className='flex items-center justify-between h-16 w-full z-50 px-4 sm:px-6 lg:px-14'>
          <LogoIcon />

          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={false}
                  className='relative text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group'
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100 duration-300" />
                </Link>
              ))}
            </div>
          </div>

          <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-orange-500/20 "
                  aria-label="Toggle menu"
                >
                  <Image alt='Menu' src={'/assets/icons/menu.svg'} height={0} width={0} className="h-7 w-7" />
                </Button>
              </SheetTrigger>

              <SheetContent className="backdrop-blur-sm ">
                <SheetHeader>
                  <SheetTitle onClick={() => setIsOpen(false)} >
                    <LogoIcon isAnimated={false} />
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription />
                <div className='mt-8 flex flex-col space-y-4'>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name + i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={menuVariants}
                    >
                      <Link
                        href={item.href}
                        prefetch={false}
                        className='text-white hover:text-orange-400 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-500/10'
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar

