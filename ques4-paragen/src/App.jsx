import { RecoilRoot } from "recoil"
import RenderElements from "./Components/RenderElements"
import "./Components/RenderElements.css"
import RenderPara from "./Components/RenderPara"
function App() {
 

  return (
    <div>
      <RecoilRoot>
      <RenderElements/>
      <RenderPara/>
      </RecoilRoot>
    </div>
  )
}

export default App
