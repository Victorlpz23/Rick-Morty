import { html, css, LitElement } from 'lit';

class CharacterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: #fff;
      border-radius: 2px;
      display: inline-block;
      height: 300px;
      width: 200px;
      margin: 1rem;
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

  static properties = {
    character: { type: Object }, 
  };

  render() {
    return html`
      <div class="card">
        <div class="card-content">
          <h3>${this.character.name}</h3>
          <img src="${this.character.image}" alt="characterImg" />
          <p>${this.character.species} | ${this.character.status}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('character-component', CharacterComponent);
