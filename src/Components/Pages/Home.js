import NavBar from "../layout/NavBar";
import { useEffect, useState } from "react";
import axios from 'axios'

const Home = (props) => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5000/todos', {
      headers: {
        'x-auth-token': localStorage.getItem("userToken")
      }
    }).then(res => setTodos(res.data)).catch(err => console.error(err))
  }, [])

    return (
      <div>
        <NavBar user={props.user}/>
        <h1>Home Page</h1>

        {todos && todos.map(todo => (
          <div key={todo._id}>
            <h6>{todo.title}</h6>
            <h6>{todo.details}</h6>
          </div>
        ))}
      </div>
    );
  };
  
  export default Home;
  









