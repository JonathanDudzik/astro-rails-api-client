// JAVASCRIPT VERSION
// import {LitElement, css, html} from 'lit';
// export const tagName = 'my-element';

// class MyElement extends LitElement {
//   static properties = {
//     name: {},
//   };
//   // Define scoped styles right with your component, in plain CSS
//   static styles = css`
//     :host {
//       color: blue;
//     }
//   `;

//   constructor() {
//     super();
//     // Declare reactive properties
//     this.name = 'Jonathan Dudzik';
//   }

//   // Render the UI as a function of component state
//   render() {
//     return html`<p>Hello, ${this.name}!</p>`;
//   }
// }
// customElements.define(tagName, MyElement);

// TYPESCRIPT VERSION
// import { LitElement, html, css } from "lit";
// import { customElement, property } from "lit/decorators.js";

// @customElement("my-element")
// export class MyElement extends LitElement {
//     static styles = [
//         css`
//             :host {
//                 display: block;
//             }
//         `
//     ];

//     @property() name = "World";

//     render() {
//         return html`<h1>Hello, ${this.name}</h1>`;
//     }
// }
