import Content from "./Content";

import { useContext } from "react";
import FontSizeContext from "../contexts/FontSizeContext";

import { useState } from "react";

const Index = () => {
  const a = useContext(FontSizeContext);   // 1rem
  const [fSize, setFSize] = useState(a);

  const handleChange = (e)=>{
    setFSize(e.target.value);
  }

  return (
    <div>
      <select name="fontsize" id="fontsize" onChange={handleChange}>
        <option value={fSize}>{fSize}</option>
        <option value="2rem">2 Rem</option>
        <option value="3rem">3 Rem</option>
        <option value="4rem">4 Rem</option>
        <option value="5rem">5 Rem</option>
        <option value="6rem">6 Rem</option>
      </select>
      <br />
      {/* updating the context value */}
      <FontSizeContext.Provider value={fSize}>
        <Content />
      </FontSizeContext.Provider>
      
    </div>
  );
};

export default Index;
