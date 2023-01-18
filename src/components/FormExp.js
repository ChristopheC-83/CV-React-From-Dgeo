import React from 'react'
import dataFormations from '../datas/formations'
import dataXP from '../datas/experiences'
import Formations from './Formations'
import Experiences from './Experiences'

export default function FormExp() {


  return (
    <div>
        <Formations
        datas={dataFormations}
        />
        <Experiences
        datasXP={dataXP}
        />
    </div>
  )
}
