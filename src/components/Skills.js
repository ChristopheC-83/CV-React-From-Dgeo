import React from "react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <>
      <div className="skills">
        <h2>Compétences</h2>
        <Skill title="HTML" rating="4" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="3" />
        <Skill title="NEXT" rating="2" />
      </div>
      <div className="skills">
        <h2>Langues</h2>
        <Skill title="Français" rating="5" />
        <Skill title="Anglais" rating="3" />
        <Skill title="Allemand" rating="1" />
      </div>
    </>
  );
}
