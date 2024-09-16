import React from "react";
import { useRecoilValue } from "recoil";
import { ParaCount } from "../store/atoms/ParaCount";

function RenderPara() {
  const ParaCounts = useRecoilValue(ParaCount);
  let para = "";
  const words = [
    "Zephyr","Lantern","Vortex","Whisper","Mirth","Catalyst","Solstice","Juggle","Quantum","Meadow","Rift","Ephemeral","Nebula","Velvet","Echo","Obsidian","Glimmer","Wander","Prism","Horizon",
  ];

  for (let i = 0; i < ParaCounts; i++) {
    para+=words[Math.floor(20*Math.random())]
    para+=" "
  }
  
   
  return <div>
    <div>{para}</div> 
    </div>;
}

export default RenderPara;
