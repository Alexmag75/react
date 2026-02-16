import {useSearchParams} from "react-router";

export const Pagination=()=>{

    const[searchParams,setsearchParams]=useSearchParams({page:'1'});
    let courentPage=Number(searchParams.get('page')||'1');

    return (
        <div>
              <button onClick={()=>{
                  if(courentPage>1){
                      setsearchParams({page: (--courentPage).toString()} );
                  }

              }
              }>prev</button>
              <button onClick={()=>{
                  setsearchParams({page: (++courentPage).toString()} );
              }}
              >next</button>
        </div>
    )
}