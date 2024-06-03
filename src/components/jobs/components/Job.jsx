import "./Job.css";


function Job(props) {

    return (
      <>
        <div className={`job ${props.className}`}>
          <h3 className="title">{props.title}</h3>
          <div className="details">{props.contractType} - {props.country} - {props.city}</div>
        </div>
      </>
    )
  }
  
  export default Job
  