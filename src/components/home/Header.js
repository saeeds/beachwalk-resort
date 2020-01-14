import React from 'react'
import Hero from '../globals/Hero';
import homeBcg from "../../images/homeBcg.jpeg";
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons'
const Header = () => {
  return (
    <Hero img={homeBcg}>
      <Banner greeting="wlecome to" title="beachwalk resort"
        text="orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ultricies nisl. Curabitur pellentesque turpis non augue accumsan."
      >
        <PrimaryBtn t="1rem">
          view details
        </PrimaryBtn>
      </Banner>

    </Hero>
  )
}

export default Header