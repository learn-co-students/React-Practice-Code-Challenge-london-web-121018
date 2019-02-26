import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((sushi, index) => {
          return (
            <Sushi key={index} sushi={sushi} handleClick={props.eatSushi} />
          );
        })}
        <MoreButton handleClick={props.moreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
