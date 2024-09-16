import React from 'react'
import { useRecoilValue } from 'recoil'
import { ParaCount } from '../store/atoms/ParaCount'

function RenderPara() {
    const ParaCounts=useRecoilValue(ParaCount);
  return (
    <div>Hello</div>
  )
}

export default RenderPara