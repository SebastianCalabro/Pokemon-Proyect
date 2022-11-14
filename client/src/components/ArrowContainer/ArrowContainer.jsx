import style from "./ArrowContainer.module.css"

export const ArrowContainer = ({page, setPage})=>{
    let handlePage = (e)=>{
        if(e.target.name==="prev"&&page>0){
          setPage(page-1)
        }else if(e.target.name==="next"&&page<3){
          setPage(page+1)
        }
        return;
       }
    return(
        <div className={style.prev_next_container}>
            <button className={style.prev_next_buttons} name="prev" onClick={(e)=>handlePage(e)}> Prev </button>
            <button className={style.prev_next_buttons} name="next" onClick={(e)=>handlePage(e)}> Next </button>
        </div>
    )
}