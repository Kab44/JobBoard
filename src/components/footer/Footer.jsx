import "./Footer.css"


function Footer(props) {
  const createCredit = () => {
    return {__html: props.text}
  }
  return (
    <>
      <footer>
        <p dangerouslySetInnerHTML={createCredit()}></p>
      </footer>
    </>
  )
}

export default Footer