import React from 'react'

export const DashboardCard = ({icon, name, count}) => {
  return (
    <div className='w-40 h-auto gap-3 p-4 shadow-md rouned-lg bg-sky-blue-50'>
      {icon}
      <p className='text-xl font-semibold'>{name}</p>
      <p className='text-xl font-semibold'>{count}</p>
    </div>
  )
}

const DashboardHome = () => {
  return (
    <div className='flex flex-wrap items-center w-full p-6 justify-evenly'>
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </div>
  )
}

export default DashboardHome