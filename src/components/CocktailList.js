import React from "react";
import Cocktail from "./Cocktail"

export default function CocktailList({cocktails, loading}) {
  if(loading){
    return <h2 className='section-title'>Loading...</h2>
  }
  if(cocktails.length <1){
    return (<h2 className="section-title">No Drinks Found :(</h2>)
  }
  return(
    <section className="section">
      <h2 className="section-title">
        <div className="cocktails-center">
          {cocktails.map(cocktail=>{
            return <Cocktail key={cocktail.id} {...cocktail}/>
          })
        }
        </div>
      </h2>
    </section>
  )
}
