import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import { mediaMobile } from "../../../styledComponents/MediaBreakpointsMixin";
import { setPriceRange } from "../../../store/filters";

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "0 auto"
  }
});

const AirbnbSlider = withStyles({
  root: {
    color: "#002D50",
    height: 0.5,
    padding: "13px 0",
    margin: 0
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#002D50",
    marginTop: -7,
    marginLeft: -7,
    "&:focus, &:hover, &$active": {
      border: "#002D50 2px solid #002D50"
    }
  },
  active: {},
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 2
  },
  markLabel: {
    fontSize: "14px",
    lineHeight: "10px",
    top: "44px",
    fontFamily: "Montserrat",
    left: "95%!important",
    color: "#000000"
  },
 
})(Slider);

export const PriсeRange = props => {
  const dispatch = useDispatch();
  const priceRange = useSelector(state => state.filters.priceRange);
  const classes = useStyles();
  const [value, setValue] = useState([
    priceRange.lowPriсe,
    priceRange.hightPrice
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendToStore = () => {
    const rangeToStore = {
      min: value[0],
      max: value[1]
    };
    dispatch(setPriceRange(rangeToStore));
  };

  const marks = [
    {
      value: 150000,
      label: "₴"
    }
  ];

  return (
    <div>
      <div className={classes.root}>
        <LeftMarc>₴</LeftMarc>
        <AirbnbSlider
          min={0}
          max={150000}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          aria-labelledby="range-slider"
          // getAriaValueText={valuetext}
          onChangeCommitted={sendToStore}
          marks={marks}
        />
      </div>

      <PriceDisplay>
        <Prices>
          {/* <p>Current price range:</p> */}
          <p>{value[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}</p>
        </Prices>
        <Prices>
          {/* <p>To ₴-</p> */}
          <p>{value[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}</p>
        </Prices>
      </PriceDisplay>
    </div>
  );
};

const PriceDisplay = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Prices = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  ${mediaMobile(`
margin-bottom:30px;
`)}
  & p:first-child {
    font-size: 14px;
  }
  & p:last-child {
    font-size: 16px;
    color: #8e8e8f;   
  }
`;

const LeftMarc = styled.p`
  margin-bottom: 7px !important;
  font-size: 14px !important;
  line-height: 10px;
  font-family: Montserrat;
  text-align: left;
  display:none;
`;
