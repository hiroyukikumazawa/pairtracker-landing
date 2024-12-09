// src/components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import FaviconLogo from './FaviconLogo';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Get Started', href: '/app' },
  ];

  const appNavigation = [
    { name: 'Home', href: '/' },
  ];

  const isAppPage = window.location.pathname === '/app';

  return (
    <header className="bg-deepSpace text-slateGray sticky top-0 z-50 shadow-neon">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <FaviconLogo />
          <span className="ml-6 text-3xl font-display text-[#EC4899]">Pair</span><span className="text-3xl font-display text-electricBlue">Tracker</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {isAppPage ?
            appNavigation.map((item) => (
              <a key={item.name} onClick={() => { navigate(item.href) }} className="text-slateGray hover:text-neonGreen transition-fast cursor-pointer">
                {item.name}
              </a>
            )) :
            navigation.map((item) => (
              item.href === '/app' ?
                <a
                  key={item.name}
                  onClick={() => navigate('/app')}
                  className="text-slateGray hover:text-neonGreen transition-fast cursor-pointer"
                >
                  {item.name}
                </a>
                :
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slateGray hover:text-neonGreen transition-fast cursor-pointer"
                >
                  {item.name}
                </a>
            ))
          }
        </nav>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-electricBlue hover:text-neonGreen focus:outline-none focus:ring-2 focus:ring-neonGreen rounded"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
      >
        <div
          className="fixed inset-0 z-40 flex"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <Transition.Child
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black opacity-50"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            ></div>
          </Transition.Child>

          {/* Mobile Menu Panel */}
          <Transition.Child
            enter="transition ease-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div
              ref={mobileMenuRef}
              className="relative max-w-xs w-full bg-deepSpace shadow-xl py-6 px-6 flex flex-col overflow-y-auto"
            >
              {/* Close button */}
              <div className="flex items-center justify-between">
                <a href="/" className="text-2xl font-display text-electricBlue flex items-center">
                  <FaviconLogo className="h-10 w-10 mr-2" />
                  PairTracker
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="text-electricBlue hover:text-neonGreen focus:outline-none focus:ring-2 focus:ring-neonGreen rounded"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6">
                <nav className="flex flex-col space-y-4">
                  {isAppPage ?
                    appNavigation.map((item) => (
                      <a key={item.name} onClick={() => { navigate(item.href); setIsOpen(false) }} className="text-slateGray hover:text-neonGreen text-lg transition-fast cursor-pointer">
                        {item.name}
                      </a>
                    ))
                    :
                    navigation.map((item) => (
                      item.href === '/app' ?
                        <a
                          key={item.name}
                          onClick={() => { navigate('/app'); setIsOpen(false) }}
                          className="text-slateGray hover:text-neonGreen text-lg transition-fast cursor-pointer"
                        >
                          {item.name}
                        </a>
                        :
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-slateGray hover:text-neonGreen text-lg transition-fast cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                    ))
                  }
                </nav>
              </div>

              {/* Optional: Add additional elements like social links or CTA */}
              <div className="mt-auto">
                <a
                  className="block w-full text-center bg-electricBlue hover:bg-neonGreen text-deepSpace py-3 px-4 rounded-lg mt-8 transition-fast cursor-pointer"
                  onClick={() => navigate('/app')}
                >
                  Get Started
                </a>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </header>
  );
};

export default Navbar;
