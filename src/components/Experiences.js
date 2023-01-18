import React from 'react'

export default function Experiences({datasXP}) {


  return (
    <div className="experiences">
    <h2>Expériences Professionnelles</h2>
    {datasXP.map(item=>(
    <div className="grid-row" key={item.id}>
      <div className="grid-item">
        <p className="grid-date">{item.date}</p>
      </div>
      <div className="grid-item">
        <h3 className="grid-title">{item.title}</h3>
        <p className="grid-location">{item.location}</p>
        <p className="grid-text">{item.text}</p>
        
        <ul className="grid-missions">
        
            {item.missions.map(mission=>(
                <li className="grid-mission" key={mission.id}>
                    {mission.title}
                </li>)
                
                )}


        </ul>
      </div>
    </div>))}
  </div>

   
  )
}
