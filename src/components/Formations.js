import React from "react";

export default function Formations({datas}) {
    // console.log(datas)
  return (
    <div className="formations">
      <h2>Formations</h2>
      {datas.map(item=>(
      <div className="grid-row" key={item.id}>
        <div className="grid-item">
          <p className="grid-date">{item.date}</p>
        </div>
        <div className="grid-item">
          <h3 className="grid-title">{item.title}</h3>
          <p className="grid-location">{item.location}</p>
        </div>
      </div>))}
    </div>
  );
}
