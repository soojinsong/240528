import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { Member } from "../data" 




export default function IntroPage(){
    return(
        <>
            <ul class="membersbox">
                {
                    Member.map((item)=>(
                        <li key={item.id} class="memberbox">
                            <Link to={`${item.id}`} class="nowmember">{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <NavLink to='/'>홈 가기</NavLink>
        </>
    )
}