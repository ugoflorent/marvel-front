import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/logo.png";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <img src={logo} alt="" />
      {data.results.map((character) => {
        return (
          <button>
            <article key={character._id}>
              <p>{character.name}</p>
              <p>{character.description}</p>
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="character"
              />
            </article>
          </button>
        );
      })}
    </div>
  );
};

export default Characters;
