import { useState } from "react";
import Tablerow from "./components/Table/Tablerow";
import Thead from "./components/Table/Thead";
// uuid start
import { v4 as uuidv4 } from "uuid";
// toastify start
 import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//  form impute
import Forminput from "./components/FormInput"
const App = () => {
  const [task, setTask] = useState([]); //DataAll
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  let chack = {
    title: Title.trim().length === 0,
    desc: Desc.trim().length === 0,
}
  function addTask() {
    if (!(chack.title || chack.desc)) {
          const newTask = {
            id: uuidv4(),
            title: Title,
            desc: Desc,
            time: `${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDay()}`,
          };
         setTask([...task, newTask]);
         // setTask(newTask);
         setTitle("");
      setDesc("");
      toast.success("oke good job")
    } else {
      toast.error('Plise file input')
    }


  }

  // delete function()
  function deletItem(n) {
    const newArray = task.filter((i) => {
      return i.id !== n;
    })
    setTask([...newArray])
  }

  return (
    <>
      <div className="container">
        {/* <h1>{number}</h1>
    <button className="btn" onClick={incrament}>start </button> */}
        <div className="card w-75 p-4 shadow rounded-2  mx-auto mt-5">
          <Forminput
            val={Title}
            text={"Enter task title..."}
            setData={setTitle}
          />
          <Forminput
            val={Desc}
            text={"Enter task description..."}
            setData={setDesc}
          />

          <button
            className="btn btn-primary"
            onClick={() => {
              addTask();
              console.log(1);
            }}
          >
            Add task
          </button>
        </div>

        <div className="card w-75 p-4 shadow rounded-2  mx-auto mt-5">
          <table className="table table-striped table-hover">
            <Thead />
            <tbody>
              {task.length > 0 ? (
                task.map((element, index) => {
                  return (
                    <Tablerow
                      data={element}
                      index={index}
                      deletfunction={deletItem}
                    />
                  );
                })
              ) : (
                <h3 className="mt-3">add to Task </h3>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
