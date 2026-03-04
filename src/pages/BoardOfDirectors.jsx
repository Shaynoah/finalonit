import React from 'react'
import ken from '../images/ken.jpg'
import liz from '../images/liz.jpg'

const SeniorManagement = () => {
  const members = [
    {
      name: 'Kenneth Okwero',
      title: 'Chief Executive Officer',
      bio: 'CEO leading ONIT with a vision for digital-first financial inclusion and strategic growth across Kenya.',
      image: ken
    },
    {
      name: 'Elizabeth Mungai',
      title: 'Chief Financial Officer',
      bio: 'CFO responsible for financial strategy, risk management, and sustainable growth initiatives.',
      image: liz
    }
  ]

  return (
    <section className="page senior-management reveal-auto">
      <div className="container py-12">
        <h1 className="about-title">Senior Management</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">Meet the senior management team driving ONIT's strategy and operations.</p>

        <div className="board-grid mt-16">
          {members.map((member, idx) => (
            <div key={idx} className="board-member-card reveal-auto">
              <div className="member-image" style={{ backgroundImage: `url(${member.image})` }}></div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeniorManagement
