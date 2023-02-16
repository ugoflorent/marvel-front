import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/logo.png";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
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
      {/* <img src={logo} alt="" /> */}
      {data.results.map((comics) => {
        return (
          <div className="comics">
            <button>
              <article key={comics._id}>
                <p>{comics.title}</p>
                <p>{comics.description}</p>
                <img
                  src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                  alt="comics"
                />
              </article>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Comics;
