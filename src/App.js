import './App.css';
import { useState } from "react";
import { Container, ButtonGroup, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[50]),
  backgroundColor: blueGrey[50],
  borderColor: blueGrey[200],
  "&:hover": {
    backgroundColor: blueGrey[100],
    borderColor: blueGrey[300]
  }
}));

const StyledInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: 0,
      borderColor: blueGrey[200]
    },
    "&:hover fieldset": {
      borderColor: blueGrey[300]
    },
    "&.Mui-focused fieldset": {
      borderColor: blueGrey[500]
    },
    "& input": {
      textAlign: "center",
      width: 60,
      color: blueGrey[700]
    }
  }
});


export default function App() {
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <Container>
      <ButtonGroup>
        <StyledButton
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 1}
        > - </StyledButton>
        <StyledInput size="small" onChange={handleChange} value={count} />
        <StyledButton onClick={() => setCount((prev) => prev + 1)}>
        +
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}
