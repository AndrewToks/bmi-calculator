import React, { useState } from "react"

function App(){
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi,setBmi] = useState(0);
  const [result,setResult] = useState("");
  
  const [DietTips, setShowDietTips]= useState("")
  
  let bmiUnit = "Kg/m3"

  // let DietTips = ""
  let DietBtn = () =>{
    if(weight === 0 || height === 0){
      setShowDietTips("")
    }else{
   if (bmi < 18.5){
    setShowDietTips("Gain weight gradually by adding healthy calories – adults could try adding around 300 to 500 extra calories a day.\n\nEat smaller meals more often, adding healthy snacks between meals.\n\nAdd extra calories to your meals with cheese, nuts, and seeds.");

  }
  else if (bmi >= 18.5 && bmi < 25){
    setShowDietTips("Eat smaller meals. Eating 5 small meals a day rather than 3 large ones can keep your metabolism working longer, helping you control your weight.Stop eating when you're full.Stick to healthy snacks.\nStay hydrated. ...")
  }
  else if(bmi >=25 && bmi < 30){
    setShowDietTips("Making healthy changes in your diet by including more fruits, vegetables, and whole grains.\n<br>\nBegin to reduce portion sizes.\n<br>\nTry to get up and move around your home more often.");
  }
  else{
    setShowDietTips("Trying intermittent fasting.\nTracking your diet and exercise.\nEating mindfully.\nEating protein with meals.\nCutting back on sugar and refined carbohydrates.");
  }
  }
}
  
  let calcBmi = (event) =>{
    event.preventDefault()
    if(weight === 0 || height === 0){
      alert("Please enter a valid weight and height")
    }else{
      
      let bmi = (weight /(height **2))
      setBmi(bmi.toFixed(1))

      if (bmi < 18.5){
        setResult("You are underweight!.")
    }
    else if (bmi >= 18.5 && bmi < 25){
      setResult("You are normal weight!.")
    }
    else if(bmi >=25 && bmi < 30){
      setResult("You are overweight!.")
    }
    else{
      setResult("You are obese!.")
    }
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return(
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate BMI
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is {bmi} {bmiUnit} .</h3>
          <p>{result}</p>
          <button className="btn" onClick={DietBtn}>Diet Tips</button>
         <div className="diet-tip">
         {DietTips}
          </div> 
        </div>
      </div>
    </div>
  )
}
export default App