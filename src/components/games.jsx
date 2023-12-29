import { gamesData } from "../assets/dummy"
import GameCard from "./gameCard"

const Games = () => {
  return (
    <>
      <h1 className=' py-9 text-center text-teal-200 text-4xl'>{gamesData.h1}</h1>
      <div className="flex justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        {
          gamesData.cards.map(({ delay, img, bg_img, card_h1, card_type, card_p, button }, key) => {
            return <GameCard key={key} delay={delay} img={img} bg_img={bg_img} card_h1={card_h1} card_type={card_type} card_p={card_p} button={button} />
          })
        }
      </div>
    </>
  )
}

export default Games