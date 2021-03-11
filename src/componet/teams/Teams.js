import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const {idTeam, strTeam, strTeamBadge} = props.team;
    return (
        <div className="team">
            <div className="card">
                <img src={strTeamBadge}className="team-logo" alt="logo"/>
                <p className="card__name">{strTeam}</p>
                <div className="grid-container">
                <Link to={`/team/${idTeam}`}>
                        <Button variant="primary">Expled <FontAwesomeIcon icon={faArrowRight} /></Button>                
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Teams;