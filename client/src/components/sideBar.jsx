import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaGlobeAsia } from 'react-icons/fa'
import { MdWorkspacePremium } from 'react-icons/md'
import { BiCloudUpload } from 'react-icons/bi'

import { isActiveStyle, isNotActiveStyle } from '../utils/styles'

const sideBar = () => {
  return (
    <div className='flex flex-col justify-between flex-none w-48 h-screen bg-sky-blue-100 text-sky-900'>
        <ul className='py-3'>
          <li>
            <NavLink to={'/home'} className={({isActive}) => isActive ? isActiveStyle: isNotActiveStyle}><FaHome className='mr-2 text-2xl'/>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/browse'} className={({isActive}) => isActive ? isActiveStyle: isNotActiveStyle}><FaGlobeAsia className='mr-2 text-2xl' /> Discover</NavLink>
          </li>
          <li>
            <NavLink to={'/upload'} className={({isActive}) => isActive ? isActiveStyle: isNotActiveStyle}><BiCloudUpload className='mr-2 text-2xl'/>Upload</NavLink>
          </li>
          <li>
            <NavLink to={'/subscribe'} className={({isActive}) => isActive ? isActiveStyle: isNotActiveStyle}><MdWorkspacePremium className='mr-2 text-2xl'/>Subscribe</NavLink>
          </li>
        </ul>
        <div className='overflow-y-auto border-2 border-sky-blue-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis quam semper, lobortis enim vel, auctor elit. Integer molestie placerat augue id aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam consectetur quis arcu interdum bibendum. Etiam ut lacus mi. Morbi faucibus porttitor venenatis. Maecenas ultrices mi nec imperdiet maximus. Curabitur molestie nec tortor non efficitur. Maecenas tincidunt ut mauris ut vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit nulla, aliquet eu aliquam non, suscipit eget purus. Pellentesque erat erat, porttitor vitae lectus id, vulputate varius nisi. Vestibulum at nulla feugiat, aliquam lorem nec, sodales sem. Aenean bibendum euismod fermentum.
Nullam ut aliquam arcu. In non nulla quis tortor tincidunt pellentesque id id purus. Aliquam quis mauris at elit dignissim facilisis. Suspendisse in ipsum lorem. Donec vitae placerat sem, nec mollis eros. Nulla imperdiet lectus tellus, ac dictum justo consequat ac. Quisque quam erat, ultricies a massa id, malesuada condimentum magna. Nunc finibus euismod ipsum, sed elementum sem vehicula quis. Nunc feugiat ornare dolor vel ullamcorper. Fusce rutrum est quis tellus rhoncus venenatis. Quisque vestibulum, sem sed eleifend consequat, lorem diam ultricies metus, ac rutrum massa orci sed ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vel sodales nisi. Sed sit amet sem vel justo lacinia fringilla at vel elit.</div>
        <div>three</div>
    </div>
  )
}

export default sideBar