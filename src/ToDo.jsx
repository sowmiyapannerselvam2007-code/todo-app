import "./todo.css";

function todo()
{
    return (<>
    <div className="container">
          <header className="header">My To Do List</header>
          <div className="form">
              <div className="row" >
                <div className="item">
                    <label> Enter the Task</label>
                </div>
                <div className="item"> <input type="text"/> </div>
              </div>
             
          </div>
    </div>
    </>)
}

export default todo;