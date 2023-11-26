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
    <SidebarStyled className='bg-colorBg2 border-2 border-borderColor2 rounded-2xl w-sidebarWidth relative flex flex-col justify-between text-colorGrey3'>
      <div className="profile relative rounded-2xl cursor-pointer font-medium text-colorGrey0 flex items-center py-1rem px-0.8rem m-1.5rem">
        <div className="profile-overlay absolute w-100 h-100 bg-colorBg3 top-0 left-0 z-0 rounded-2xl border-2 border-borderColor2
        opacity-20 transition-all duration-500 ease-linear backdrop-blur hover:opacity-100 hover:border-2 hover:border-borderColor2"></div>
        <div className="image relative z-10 shrink-0 inline-block overflow-hidden transition-all duration-500 ease-in rounded-full w-avatar h-avatar
        hover:scale-110">
          <Image width={70} height={70} src='/avatar1.png' alt='profile'/>
        </div>
        <h1 className='text-xl flex flex-col leading-6 relative ml-2'>
          <span>Sin</span>
          <span>Rostro</span>
        </h1>
      </div>
      <ul className="nav-items ">
        {menu.map((item) => {

          const link = item.link;

          return (
            <li 
              className={`nav-item py-0.8rem pl-2.1 my-0.3 flex gap-1.5rem items-center relative cursor-pointer after:absolute after:['*'] after:left-0 after:top-0 
              after:w-0 after:h-100 after:z-10 after:transition-all after:duration-300 after:ease-in-out before:['*'] before:top-0
              before:right-0 before:bg-colorGreenDark before:w-0 before:h-100 before:absolute before:rounded-topBottomLeft hover:after:w-100 hover:after:bg-colorBg3 hover:after:opacity-20
              ${pathname === link ? 'active bg-activeNavLink text-colorIcons2 before:w-0.3' : ''}`} 
              onClick={() => {
              handleClick(link)
            }}>
              <div className='flex items-center text-colorIcons'>{item.icon}</div>
              <Link className='font-medium transition-all duration-300 ease-in-out z-20 leading-none' href={link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  );
}
















const SidebarStyled = styled.nav`
    width: ${(props) => props.theme.sidebarWidth};
    position: relative;
    background-color: ${(props) => props.theme.colorsBg2};
    background-color: ${(props) => props.theme.colorsBg2};

  .active {
    i{
      color:rgba(249,249,249, 0.75);
    }
  }
    
  
`;

export default Sidebar;
