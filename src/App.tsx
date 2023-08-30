import { useState } from 'react';
import axios from "axios";
import './App.css';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

function App() {

  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (text.length <= 200) {
      try {
        const response = await axios.get(`http://localhost:8080/fetch?text=${encodeURIComponent(text)}`);
        console.log("Response:", response.data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      alert("Text must be 200 characters or less.");
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Textarea
        placeholder="Enter your text here"
        minRows={3}
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        sx={{
          '--Textarea-focused': 1,
        }}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}

export default App;
