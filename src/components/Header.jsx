import { NavLink } from "react-router-dom";
import styled  from "styled-components";



const Nav = styled(NavLink)`
    background-color: rgba(0,0,0,0);
    text-decoration: none;
    margin-left: 30px;
    color: white;
    &.active{
        color: red;
    }
`;


export default function Header(){
    return(
        <>
            <div class="top">
                <h2>송수진의 웹페이지</h2>
            </div>
            <div class="menubox">
                <Nav to='/'>홈가기</Nav>
                <Nav to='/intro'>인트로</Nav>
                <Nav to='/work'>투두리스트</Nav>
                <Nav to='/react'>리액트</Nav>
            </div>
            
        </>
    );
}