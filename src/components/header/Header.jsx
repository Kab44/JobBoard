import "./Header.css"
import Title from "./components/Title"


function Header(props) {

  return (
    <>
      <header>
        <Title text={props.title} />
      </header>
    </>
  )
}

export default Header