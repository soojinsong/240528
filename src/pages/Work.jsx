import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { Todos } from "../todolist" 



export default function WorkPage(){
    return(
        <>
            <ul class="todosbox">
                {
                    Todos.map((item)=>(
                        <li key={item.id} class="todobox">
                            {item.title} ||  {item.content}
                        </li>
                    ))
                }
            </ul>
            <NavLink to='/'>홈 가기</NavLink>
        </>
    )
}