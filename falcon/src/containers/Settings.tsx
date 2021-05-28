import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CallToActionBtn } from '../common/Buttons';
import { ApiClient } from '../services/api/ApiClient';
import { LocalStorageService } from '../services/LocalStorageService';
import { darkTheme } from '../styles/styleguide';

const Container = styled.div`
  margin: 40px auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const InputDiv = styled.div`
  margin: 5px;
`;
const Input = styled.input`
  padding: 10px;
  background-color: ${(t) => t.theme.colorBG0};
  border: 1px solid ${(t) => t.theme.colorText};
  border-radius: ${darkTheme.defaultRadius};
  placeholder: ${(t) => t.theme.colorGray0};
  color: ${(t) => t.theme.colorText};
  font: ${darkTheme.fontN4};
`;
export function Settings() {
  const [urlInput, setUrlInput] = useState('');
  const [portInput, setPortInput] = useState('');

  useEffect(() => {
    const s: { url: string; port: string } =
      LocalStorageService.getValue('server');
    if (s) {
      setUrlInput(s.url);
      setPortInput(s.port);
    }
  }, []);

  const handleSubmit = () => {
    ApiClient.getInstance().setBaseUrl(urlInput, portInput);
    LocalStorageService.saveValue('server', { url: urlInput, port: portInput });
  };

  return (
    <Container>
      <InputsContainer>
        Connect to backend at:
        <InputDiv>
          <Input
            id="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="localhost"
          />
        </InputDiv>
        <InputDiv>
          <Input
            id="outlined-basic"
            value={portInput}
            onChange={(e) => setPortInput(e.target.value)}
            placeholder="8080"
          />
        </InputDiv>
      </InputsContainer>
      <CallToActionBtn onClick={handleSubmit}>Save</CallToActionBtn>
    </Container>
  );
}
