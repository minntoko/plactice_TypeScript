import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "";

type GoogleGeometryResponse = {
  results: {
    geometry: {
      location: {
        lat: number,
        lng: number
      }
    }
  }[];
  status: "OK" | "ZERO_RESULTS";
}


const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // GoogleAPIに送信
  axios.get<GoogleGeometryResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enteredAddress
  )}&key=${GOOGLE_API_KEY}`
  ).then(response => {
    if(response.data.status != "OK") {
      throw new Error("座標を取得できませんでした。");
      
    }
    const coordinates = response.data.results[0].geometry.location;
    console.log(coordinates);
  }).catch(err => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler)