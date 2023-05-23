import { html, css, render } from 'lit';
import { APiTEmplate } from './components/ApiTemplate';

const apiUrl = 'https://rickandmortyapi.com/api/character';
const dataContainer = document.getElementById('dataContainer');

const appStyles = css`
  body {
    background-color: #f1f1f1;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
   
  }

  .card {
    background: #53cbb5;
    border-radius: 2px;
    height: 300px;
    width: 250px;
    margin: 2rem;
    margin-left: 0px;
    position: relative;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.24);
  }

  .card img {
    width: 70%;
  }

`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data.results)) {
      const items = data.results.map(character => {
        return html`
          <div class="card">
            <div class="card-content">
              <h3>${character.name}</h3>
              <img src="${character.image}" alt="characterImg" />
              <p>${character.species} | ${character.status}</p>
            </div>
          </div>
        `;
      });
      const template = html`
        <div class="container">
          <div class="card-container">
            ${items}
          </div>
        </div>
      `;
      render(template, dataContainer);

      const style = document.createElement('style');
      style.innerHTML = appStyles.toString();
      dataContainer.prepend(style);
    } else {
      console.error('Invalid response format:', data);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
