import { useState } from "react";
import './style.css'

const CheckBox = () => {
  const [moviesChecked, setMoviesChecked] = useState(false);
  const [animationsChecked, setAnimationsChecked] = useState(false);
  const [seriesChecked, setSeriesChecked] = useState(false);

  const handleReset = () => {
    setMoviesChecked(false);
    setAnimationsChecked(false);
    setSeriesChecked(false);
  };

  return (
    <div className="checkbox" >
      <div className="input-container">
        <div className="check-container">
          <input
            type="checkbox"
            id="movies"
            checked={moviesChecked}
            onChange={() => {
              setMoviesChecked(!moviesChecked);
            }}
          />
          <label htmlFor="movies">Movies</label>
        </div>
        <div className="check-container">
          <input
            type="checkbox"
            id="animations"
            checked={animationsChecked}
            onChange={() => {
              setAnimationsChecked(!animationsChecked);
            }}
          />
          <label htmlFor="animations">Animations</label>
        </div>
        <div className="check-container">
          <input
            type="checkbox"
            id="series"
            checked={seriesChecked}
            onChange={() => {
              setSeriesChecked(!seriesChecked);
            }}
          />
          <label htmlFor="series">TV Series</label>
        </div>
        {moviesChecked || animationsChecked || seriesChecked ? (
          <button className="continue">Continue</button>
        ) : null}
        {moviesChecked || animationsChecked || seriesChecked ? (
          <button className="reset" onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
};

export default CheckBox;