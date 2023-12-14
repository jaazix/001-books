const AddBook = () => {

    const addForm = (
        <div>
            <center><h1 className="fz">Add Book</h1></center>
            <form>
                <div className="form-outline mb-4">
                    <input type="text" name="title"  className="form-control" placeholder="title"/>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" name="urlImg"  className="form-control" placeholder="urlImg"/>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" name="Description"  className="form-control" placeholder="Description"/>
                </div>
            </form>   
        </div>
    )
    return (
        <>
        <div className="row align-items-center">
            <div className="col-md-4 mb-4 mx-auto">
                {addForm}
            </div>
        </div>
        </>
    );
    }

export default AddBook;