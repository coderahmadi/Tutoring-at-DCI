import { useContext } from "react";
import FontSizeContext from "../contexts/FontSizeContext";

const Content = () => {
  const nf = useContext(FontSizeContext);
  console.log(nf);
  return (
    <>
      <p style={{ fontSize: nf }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        fuga eos quis quam! Perspiciatis minus commodi perferendis quibusdam
        iusto hic cum nam doloribus, numquam illo repellendus dolor voluptatibus
        similique explicabo?
      </p>
    </>
  );
};

export default Content;
