
  const[todo,addtodo]=useState('')
  const[todos,addtodos]=useState([])
  console.log(todos)
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={(e)=>{
          const ar=[]
          ar.push({id:undefined,task:e.target.value,done:false})
          addtodo(ar)
        }} type="text" placeholder="🖊️ Add item..." />
        <i  className="fas fa-plus" onClick={()=>{addtodos([...todos,...todo])}} ></i>
      </div>
      
      {todos.map((item,index)=>{
        item.id=index
        return(
        <div>
          <div className="todos">
             <div className="todo">
               <div className="left">
                 <input type="checkbox" name="" id=""  onChange={(e)=>{
                  addtodos(todos.map((x)=>{if(x.id===item.id){x.done=e.target.checked
                  return x}
                else{return x}}))
                 }}/>
                 <p>{item.task}{item.done}</p>
               </div>
               <div className="right">
                 <i className="fas fa-times" onClick={()=>{addtodos(
                  todos.filter(
                    (x)=>{return x.id!==item.id}))}}></i>
               </div>
             </div>
           </div>
           
        </div>)
      })}

      {todos.map((x)=>{
        if(x.done===true){
          return(
            <h1>{x.task}</h1>
          )
        } 
        else{return null}
       
      })}
    </div>
  );