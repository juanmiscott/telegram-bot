class Header extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
 
      
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color:#414040;
        height: 90%;
              
      }
      
      h1 {
        font-size: 50px;
        font-weight: bold;
        color: white;
        margin: 0;
      }
      
      .header-icons {
        display: flex;
        gap: 10px;
      }
      
      .menu-icon {
        cursor: pointer;
        transform: rotate(0deg); 
        transition: transform 0.3s ease-in-out; 
      }

      .menu-icon:hover {
        transform: rotate(180deg);}
    </style>
   
  <header>
    <h1>Pedidos</h1>
    <div class="header-icons">
    <svg class="menu-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </header>
  `
  }
}
    
customElements.define('header-component', Header)