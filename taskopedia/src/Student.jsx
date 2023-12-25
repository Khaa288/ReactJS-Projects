function Student(props) {
    return (
      <div className="container p-4">
        <div className='row border'>
          <div className="col-2">
            <img src={props.headshot} className="w-100" alt=""/>
          </div>
          <div className="col-10">
            {props.fullName}
            <br />
            Programming Experience {props.experience} years
          </div>
        </div>
      </div>
    );
};

export default Student;