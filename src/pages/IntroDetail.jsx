import { Member } from "../data";
import { useParams } from "react-router-dom";
import styled from 'styled-components';



export default function IntroDetailPage(){
    const {id} = useParams();

    return(
        <>
            {
                Member.map((item)=>{
                    if(item.id === parseInt(id)){
                        return(
                            <div key={item.id} class="detailbox">
                                <h2>{item.name}</h2>
                                <p>{item.major}</p>
                            </div>
                        );
                    }
                })
            }
        </>
    );
}