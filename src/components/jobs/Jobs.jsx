import "./Jobs.css";
import Job from "./components/Job";

function Jobs(props) {
  return (
    <>
      <div className="jobs-container">
        {props.list.map((job) => (
          <Job
            className={job.className}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
          />
        ))}
      </div>
    </>
  );
}

export default Jobs;
