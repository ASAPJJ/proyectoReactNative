import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': 'a5b031ee77mshcc4efb174f98558p199f3fjsn2b712ca82d71',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

export const ApiFetch = async() =>{  
    try{
        const data = await axios.request(options);
        return data?.data
     }
    catch(e){
        console.log('NO ANDA');
    }
}