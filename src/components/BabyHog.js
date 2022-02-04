import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({id, name, hobby, eyeColor}) {

  const [weight, setWeight] = useState(0)

  function handleChangeWeight(e) {
    if (e.target.name === "+"){
      setWeight(weight => weight + 1)
    }
    else if (e.target.name === "-"){
      setWeight(weight => weight - 1)
    }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  const eyeColorMapper = {
    normal: normalBaby,
    sun: SunBaby,
    blue: BlueBaby,
    glowing: GlowingBaby
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
