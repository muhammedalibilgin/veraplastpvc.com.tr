'use client';

import './header.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/menuData';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuEnter = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
  };

  return (
    <div className="header-menu hidden lg:block ml-16">
      <div className="header-inner">
        <nav className="nav">
          <ul className="nav-list">
            {NAV_LINKS.map((item) => (
              <li 
                key={item.id} 
                className={`${item.isMega ? "has-mega" : ""} ${activeMenu === item.id ? 'active' : ''}`}
                onMouseEnter={item.isMega ? () => handleMenuEnter(item.id) : undefined}
                onMouseLeave={item.isMega ? handleMenuLeave : undefined}
              >
                {item.isMega ? (
                  <>
                    <span>{item.label}</span>
                    <div className={`mega-menu ${activeMenu === item.id ? 'active' : ''}`}>
                      {item.columns.map((column, idx) => (
                        <div key={idx} className="mega-column">
                          {column.map((subLink, subIdx) => (
                            <Link 
                              key={`${subLink.href}-${subIdx}`} 
                              href={subLink.href}
                              onClick={handleLinkClick}
                            >
                              › {subLink.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}