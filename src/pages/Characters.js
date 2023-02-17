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
    <div className="characters-content">
      {/* <img src={logo} alt="" /> */}
      {data.results.map((character) => {
        return (
          <div>
            <button>
              <article key={character._id}>
                <p>{character.name}</p>
                <img
                  src={
                    character.thumbnail.path +
                    "/portrait_uncanny." +
                    character.thumbnail.extension
                  }
                  alt="character"
                />

                <p>{character.description}</p>
              </article>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
