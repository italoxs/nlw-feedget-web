import { Widget } from "./components/Widget";

interface ButtonProps {
  text?: string;
}

function Button({text}: ButtonProps) {
  return <button>{text ?? 'Default'}</button>
}

export function App() {
  return (
    <>
      <Widget />
    </>
  )
}
