import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const ExperienceCard = (Props: { company_name: string, date: string, icon: StaticImageData, iconBg: string, points: string[], title: string }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={Props.date}
      iconStyle={{ background: Props.iconBg }}
      icon={
        <div>
          <Image src={Props.icon} alt={Props.title} fill className='object-contain p-2' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{Props.title}</h3>
        <p className=' text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{Props.company_name}</p>
      </div>
      <ul className='mt-5 ml-5 space-y-2 list-disc'>
        {Props.points.map((point, index) => (
          <li key={`experience - ${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard