import React from 'react'
import { SponsorList } from '../Sponsors/SponsorList'
import SponsorItem from '../Sponsors/SponsorItem';
import "../Sponsors/Sponsors.css";
import Footer from "../../components/Footer/Footer";

function Sponsors() {
    return (
        <div>   
        <div className='sponsors'>
            <h1 className='sponsorTitle'>Sponsors</h1>
            <div className="sponsorList">
                {SponsorList.map((sponsorItem, key) => {
                return (
                    <SponsorItem 
                      key={key} 
                      image={sponsorItem.image} 
                      name={sponsorItem.name} 
                      info={sponsorItem.info} 
                    />
                );   
            })}
            </div>
        </div>
        <Footer />
        </div>
        
    );
}

export default Sponsors