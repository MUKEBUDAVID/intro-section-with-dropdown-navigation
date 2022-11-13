import React from 'react';
import { useMediaQuery } from "react-responsive";
import hero_desktop from '../../assets/images/image-hero-desktop.png';
import hero_mobile from '../../assets/images/image-hero-mobile.png';
import audio from '../../assets/images/client-audiophile.svg';
import data from '../../assets/images/client-databiz.svg';
import meet from '../../assets/images/client-meet.svg';
import maker from '../../assets/images/client-maker.svg';
import "../../Style/App.scss";



function Main() {
const mobileMediaQuery = useMediaQuery({ query: "(max-width: 375px)" });


    return (
        <main>
            <section className='left'>
                {mobileMediaQuery ? <h1 className='titre'>Make  remote work</h1> :<h1 className='titre'>Make <br /> remote work</h1> }
                
                <p className='text_central'>Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.</p>
                
                <button type="submit">Learn more</button>


                <ul className='icon_list'>
                    <li><img src={data} alt="data_icon"/></li>
                    <li><img src={audio} alt="audio_icon"/></li>
                    <li><img src={meet} alt="meet_icon"/></li>
                    <li><img src={maker} alt="maker_icon"/></li>
               </ul>
            </section>

            <section className='right'>
                {mobileMediaQuery ? <img src={hero_mobile} alt="image_left" /> : <img src={hero_desktop} alt="image_left" />}
            </section>
        </main>
        
    );
};

export default Main;