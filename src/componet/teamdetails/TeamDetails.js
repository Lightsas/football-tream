import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [teams, setTeam] = useState({}) 
    // const [gender, setGender] = useState(false);
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]));
    })
    const {strTeam, intFormedYear, strCountry, strGender, strSport, strDescriptionDE, strDescriptionEN,strTeamBanner, strFacebook, strInstagram, strYoutube,} = teams;
    return (
        <div className="player_detailsTop">
            <img className="banner-image" src={strTeamBanner} alt=""/>
            <div className="player_details">
                <div>
                    <h2>{strTeam}</h2>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>Sport Type : {strSport}</p>
                    <p>Gender : {strGender}</p>
                </div>
                <div>
                    <img src="" alt=""/>
                </div>

            </div>
            <div className="description">
                <p>{strDescriptionDE}</p>
                <br/>
                <p>{strDescriptionEN}</p>
            </div>
            <div className="Icon">
                <a className="icon-media"  href={`https://${strFacebook}`} title="facebook"><FaFacebook /></a>
                <a className="icon-media" href={`https://${strInstagram}`}><FaInstagram /></a>
                <a className="icon-media"  href={`https://${strYoutube}`}><FaYoutube /></a>
            </div>
        </div>
    );
};

export default TeamDetails;