import { LitElement, html, css } from 'lit';

export class APiTEmplate extends LitElement {
  static styles = [
    css`
      .container {
        text-align: center;
        margin-bottom: 18rem; 
      }
      h1 {
        font-size: 100px;
      }
      .title {
        color: #24AA91;
      }
      p {
        font-size: 30px;
      }
    `
  ];

  render() {
    return html`
      <div class="container">
        <h1>The <strong class="title">Rick And Morty</strong> API </h1>
      </div>
    `;
  }
}

customElements.define('api-template', APiTEmplate);
