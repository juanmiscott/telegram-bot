class Main extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        name: 'Carlos',
        email: 'carlossedagambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        name: 'Errejon',
        email: 'darioemehache@gmail.com',
        createdAt: '2025-04-22',
        updatedAt: '2025-05-19'
      }
    ]
  }

  render () {
    this.shadow.innerHTML = /* html */`
  <style>
    
    main {
      display: flex;
      height: 48rem;
      margin-top: 50px;
      
    }
      
    .columna-izquierda {
      width: 45%;
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
      
    .filtro-container {
      margin-bottom: 20px;
      width: 100%;
    }
      
    .filtro-box {
      background-color: white;
      padding: 10px;
      display: flex;
      align-items: center;
      border-radius: 10px;
    }
      
    .usuario-container {
      flex-grow: 1;
      margin-bottom: 15px;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
      
    .usuario-cabecera {
      background-color: white;
      padding: 5px;
      display: flex;
      justify-content: flex-end;
      border-radius: 5px;
    }
      
    .acciones {
      display: flex;
      gap: 10px;
      cursor:pointer;
    }
      
    .usuario-info {
      background-color:rgb(71, 10, 18);
      color: white;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 15px;
      border:1px solid rgb(157, 11, 214);
      transition: transform 0.2s ease-in-out;

    }

    .usuario-info:hover {
      transform: scale(1.03);
      box-shadow: 0px 5px 15px rgba(0, 173, 179, 0.9);
    }
      
    .usuario-info p {
      margin-bottom: 6px;

    }
      
    .paginacion {
      background-color: white;
      color: #333;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
      
    .columna-derecha {
      width: 80%;
      padding: 10px;
    }
      
    .form-header {
      background-color: #ffffff;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      border-radius: 10px;
    }
      
    .form-title {
      background-color:rgba(15, 136, 120, 0.6);
      padding: 6px;
      display: flex;
      align-items: center;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;   

    }
      
    .form-title span {
      color: white;
      font-weight: bold;
    }
      
    .form-icons {
      display: flex;
      gap: 10px;
      padding: 10px;
      align-items: center;
      cursor: pointer;
    }
      
    .form-body {
      padding: 0px;
      margin-top: 20px;
    }
      
    .form-labels {
      display: flex;
      margin-bottom: 10px;
      gap: 15px;
      border-radius: 10px      

    }
      
    .nombre-label, .email-label {
      width: 100%;
    }
      
    .form-inputs {
      display: flex;
      gap: 30px;
      width: 98%;
    }
      
    .nombre-input, .email-input {
      flex: 1;
    }
      
    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 8px;
      height: 50%;
      background-color:rgba(106, 135, 214, 0.73);
      border: none;
      color: white;
      border-radius: 10px      

    }
      
  @media (max-width: 768px) {
    main {
      flex-direction: column;
    }
        
    .columna-izquierda,
    .columna-derecha {
      width: 100%;
    }
  }
  </style>
    
  <main>
    <div class="columna-izquierda">
      <div class="filtro-container">
        <div class="filtro-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4V14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 18V20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 4V10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14V20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 4V8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 12V20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="6" cy="16" r="2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18" cy="10" r="2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
        
      <div class="usuario-container">
        <div class="usuario-cabecera">
          <div class="acciones">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 3.5L20.5 7.5L7 21H3V17L16.5 3.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
          
        <div id="usuario-info-container"></div>
        </div>
        
        <div class="paginacion">
          <span>1 registro en total, mostrando 10 por página</span>
        </div>
      </div>
      
      <div class="columna-derecha">
        <div class="form-header">
          <div class="form-title"><span>General</span></div>
          <div class="form-icons">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21L12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 10L21 3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 5L19 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 21H9L12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2H18L22 6V22H2V2H6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="6" y="14" width="12" height="8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 2V8H18V2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div class="form-body">
          <div class="form-labels">
            <div class="nombre-label">Nombre</div>
            <div class="email-label">Email</div>
        </div>
          
          <div class="form-inputs">
            <div class="nombre-input">
              <input type="text" name="nombre">
            </div>
            <div class="email-input">
              <input type="email" name="email">
            </div>
          </div>
      </div>
    </div>
  </main>
    `

    const userInfoContainer = this.shadow.querySelector('#usuario-info-container')
    userInfoContainer.innerHTML = ''

    this.data.forEach(user => {
      const userDiv = document.createElement('div')
      userDiv.className = 'usuario-info'
      userDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Fecha de creación:</strong> ${user.createdAt}</p>
        <p><strong>Fecha de actualización:</strong> ${user.updatedAt}</p>
      `
      userInfoContainer.appendChild(userDiv)
    })
  }
}

customElements.define('main-component', Main)
