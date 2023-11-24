'use client';

import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider'
import Image from 'next/image';
import menu from '@/app/utils/menu'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


function Sidebar() {
  // const {theme} = useGlobalState();


  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link:string) => {
    router.push(link)
  };

  return ( 
    <SidebarStyled 
      className='bg-colorBg2 border-2 border-borderColor2 rounded-2xl w-sidebarWidth relative'
    >
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src='/avatar1.png'/>
        </div>
        <h1>
          <span>Sin</span>
          <span>Rostro</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {

          const link = item.link;

          return (
            <li 
              className={`nav-item ${pathname === link ? 'active' : ''}`} 
              onClick={() => {
              handleClick(link)
            }}>
              {item.icon}
              <Link href={link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </SidebarStyled>
  );
}
















const SidebarStyled = styled.nav`
    width: ${(props) => props.theme.sidebarWidth};
    position: relative;
    background-color: ${(props) => props.theme.colorsBg2};
    background-color: ${(props) => props.theme.colorsBg2};
`;

export default Sidebar;
