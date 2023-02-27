import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

// this api is our backend api for development
// const baseUrl = 'http://localhost:8000/api/cars/all/';



// THIS API IS FOR TESTING PURPOSES ONLY
const baseURL: string = 'https://randomuser.me/api/?results=20';

// this function will fetch the data from the api
const fetchData = async () => {
  return axios.get(baseURL).then((response) => {
    const {results} = response.data;
    console.log(results);
    return results;
  })
  .catch((error) => {
    console.error(error);
  });
};

// // this function will render the data
// const renderData = (data: any) => {
//   return data.map((item: any) => {
//     return (
//       <div key={item.id}>
//         <h1>{item.name}</h1>
//       </div>
//     );
//   });
// };

// this is the main function

export default function App() {
  const [people, setPeople] = useState([]);


  useEffect(() => {
    fetchData().then(apiPeople => {
      setPeople(apiPeople);
    });
  }, []);

// we are returning the data from the api, and we are mapping through the data, and we are returning the data in a div, and we are returning the data in a h1 tag
  return (
    <div className="App">
      <h1>People</h1>
      {people.map((person: any, personIdx: any) => <div key={personIdx}>
        <li>
        {person.name.first}, {person.name.last}
        </li>
        {person.picture.thumbnail && <img src={person.picture.thumbnail} alt=""/> }

      </div>)}
    </div>
  );
}

