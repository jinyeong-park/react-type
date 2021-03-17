interface ChildProps {
  color: string;
  onClick: () => void;
}

// 1st approach - cannot take a children
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

// 2nd approach: can take children
// FC : FunctionalComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}