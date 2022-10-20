import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
body{
    font-family: Roboto, sans-serif;
    font-size: 14px;
     box-sizing: border-box;
}

.link {
    text-decoration: none;
}

.list {
    list-style: none;
    padding-left: 0;
    margin: 0;

}

.input {
    padding: 0;
}
h1,
h2,
h3,
p {
    margin: 0;
}`;
