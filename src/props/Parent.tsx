// import { Child } from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
  // return <Child color="red" onClick= {() => console.log("clicked")} />
  return
  <ChildAsFC
    color="red"
    onClick= {() => console.log("clicked")}
  >
    I am a children
  </ChildAsFC>
}

export default Parent;