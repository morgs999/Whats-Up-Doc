const CommentList = ({ procedures = [] }) => {
  if (!procedures.length) {
    return <h3>No Procedures Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Procedures
      </h3>
      <div className="flex-row my-4">
        {procedures &&
          procedures.map((procedure) => (
            <div key={procedure._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {procedure.procedureAuthor} procedureed{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {procedure.createdAt}
                  </span>
                </h5>
                <p className="card-body">{procedure.procedureText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
