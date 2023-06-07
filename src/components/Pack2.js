import React, {Fragment, useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import axios, { Axios } from 'axios';
import { getUserThunk } from '../redux/actions/userThunk';
import { useDispatch } from 'react-redux';
import "./App.scss"
export default function Pack2() {
  const [user, isFetchingUser] = useSelector((state) => [
    state.user.user, 
    state.user.isFetchingUser, 
  ]);
  const [currency, setCurrency] = useState(user.currency)

  const [{ cards }, setCards] = useState({ cards: [] });
 
  const dispatch = useDispatch(); 
  
 
    const updateCurrency = async() => {
      
        try {
          const newCurrency = user.currency-10; 
            const body = {currency: newCurrency}
            const response = await fetch(`https://ttp-capstone-project-backend.vercel.app/user/${user.id}`, {
              method: "PUT", 
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(body)
            })
            dispatch(getUserThunk(user.id))
            console.log(newCurrency); 
        } catch (err) {
            console.error(err.message)
        }
    }

    const handleSubmit = () => {
      getRandom(); 
      updateCurrency(); 
    }

    const [players, setPlayers] = useState([]);
    const vcImg = (
      <img
        src="https://i.kinja-img.com/gawker-media/image/upload/t_original/rqzu9vldxphnlthogvrs"
        alt="$"
        width="5%"
      ></img>
    );
    const getPlayers = async () => {
      try {
        const response = await axios(
          "https://ttp-capstone-project-backend.vercel.app/players_cards"
        );
        setPlayers(response.data.slice(0, 10));
      } catch (err) {
        console.error(err.message);
      }
    };
    useEffect(() => {
      getPlayers();
    }, []);
    const getRandom = async () => {
      //Get random number from players array, 0-9
      let selector = Math.floor(Math.random() * 10)
      let chosenCard = players[selector];
      
  
  
  
      cards.push(<div key={cards.length}>
        <div data-aos = "flip-up" className="homeboxes">
        <div className="maincontainer"> 
  
  <div className="thecard">
  
  
  <div className="thefront"> 
  
  
    
     <img
                src={chosenCard.playerImage}
                className="card-img-top"
                alt={chosenCard.playerId}
              /> 
  
  
  
  </div>
  <div className="theback">
    <ul className="flex">
  <b> Name: {chosenCard.playerName} </b>
  <b> Number: {chosenCard.playerNumber} </b>
  <b> Overall:{chosenCard.playerRating} </b>
  <b> Team: {chosenCard.playerTeam} </b>
  <b> Height: {chosenCard.playerHeight} </b>
  <b> Weight: {chosenCard.playerWeight} </b>
  </ul>
  </div>
  
  
  </div>
  
  </div>
        
        
  </div>
        </div>
        );
      setCards({ cards: [...cards] });
  
  
  
  
     
      let user_id = user.userId; 
      let player_id = chosenCard.playerId
      console.log(chosenCard)
      console.log(chosenCard.playerId)
      //Need to add currency subtraction later here
  
  
      try {
        const response = await fetch("https://ttp-capstone-project-backend.vercel.app/users_collection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({user_id, player_id}),
        });
      } catch (error) {
        console.error(error.message);
      }
    }
  

    return (
      <Fragment>

<div  className="bg2">

<div data-aos = "fade-up" className="homeboxes">
      <h1 className="text-center mt-5 text-white ">All-Stars</h1>

      <div className="image d-flex justify-content-center">
          <img
            src="https://s3.envato.com/files/85563070/1.png"
            alt="chest"
            width="35%"
          ></img>
      </div>
      </div>
      <div className="image d-flex justify-content-center">

      {user.currency < 15 ? (
          <h1>Please add more {vcImg} to Open  </h1>
        ) : (
          <button type="button" class="btn btn-secondary mb-3" onClick={handleSubmit} > 
          Open (15 {vcImg}) 
          </button>
        )}
    
      </div>
      <div className="d-flex justify-content-center">
      
      {cards}
<div>
       
        </div>

      </div>

        <div className="d-flex flex-wrap justify-content-around mx-3">
          {players.map((player) => (
            <div class="player-card text-white bg-dark mt-4">
              <img
                src={player.playerImage}
                class="card-img-top"
                alt={player.playerId}
              />
              <div class="card-body">
                <h5 class="card-title">{player.playerName}</h5>
                <p className="card-text">
                  Overall: {player.playerRating}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </Fragment>
    );
          }