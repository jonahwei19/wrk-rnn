import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const getGptResponse = async () => {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [...conversation, {role: "user", content: message}],
      max_tokens: 1000,
      temperature: 0.5,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      }
    };

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', data, config);
      const gptResponse = response.data.choices[0].message.content;
      setConversation([...conversation, {role: "assistant", content: gptResponse}]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGptResponse();
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={message} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {conversation.map((message, index) => (
          <p key={index}><strong>{message.role}:</strong> {message.content}</p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
