import { useEffect, useState } from "react";
import Clock from "react-clock";
import styles from "../styles/Clock.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";

interface PropsType {
  initialSize: number;
}

const StyledMain = styled.main`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(/Butte_sunrise.jpg);
    background-size: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledFormControl = styled(FormControl)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
 `

const StyledSelectLabel = styled(InputLabel)`
  color: #fff;
`

const StyledSelect = styled(Select)`
  background-color: #1976d2;
  display: block;

`

const StyledBeginButton = styled(Button)`
display: block;
`

export default function App({ initialSize = 150 }: PropsType) {
  const [value, setValue] = useState(new Date());
  const [size, setSize] = useState(initialSize);
  // overall time in seconds
  const [lengthTime, setLengthTime] = useState(5);
  const markSize = 15;

  const handleLengthChange = (event: SelectChangeEvent<unknown>) =>
    setLengthTime(
      typeof event.target.value === "string"
        ? parseInt(event.target.value)
        : event.target.value as number
    );

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // const handleResize = () => {
  //   const smallestAspect =
  //     window.innerHeight < window.innerWidth
  //       ? window.innerHeight
  //       : window.innerWidth;
  //   setSize(Math.floor(smallestAspect * 0.75));
  // };

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <StyledMain>
      <Clock
        className={styles.clock}
        value={value}
        hourMarksWidth={markSize}
        renderMinuteMarks={false}
        renderMinuteHand={false}
        secondHandWidth={markSize}
        size={size}
      />
      <div style={{ width: '100%', height: '100%' }}>
      <StyledFormControl variant="filled">
      <StyledSelectLabel id="length-select-label">Length</StyledSelectLabel>
      <StyledSelect
        id="length-select"
        labelId="length-select-label"
        variant="filled"
        value={lengthTime}
        defaultValue={3}
        label="Length"
        onChange={handleLengthChange}
      >
        <MenuItem value={3}>3 seconds</MenuItem>
      </StyledSelect>
      <StyledBeginButton variant="contained">Begin</StyledBeginButton>
      </StyledFormControl>
  </div>
    </StyledMain>
  );
}
