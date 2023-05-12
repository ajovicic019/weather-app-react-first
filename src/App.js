import "./App.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function App(props) {
  let apiKey = `1dbf926d3b4417bf379db7043bec1047`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  function displayTemperature(response) {
    alert(
      `weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </header>
    </div>
  );
}

export default App;
