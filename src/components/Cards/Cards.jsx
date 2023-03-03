import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards ({characters,onClose}) {
  
  return (
    <div className={style.CardContainer}>
      {
        characters.map((character) => {
          return <Card  
            key={character.name}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            image= {character.image}
            detailId={character.id}
            onClose={() => onClose(character.id) }
          />
        })
      }
    </div>
  )
}
