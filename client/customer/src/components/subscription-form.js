class SubscriptionForm extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []

  }

  async connectedCallback () {

    await this.loadData()
    await this.render()
  }

  loadData() {
    this.data = [
      {
        title: "  Promote a new product or service",
        content: "Start your business today with a great and strong landing page mado to enchance the marketers workflow.",
        feautured:"Subscripción por un año",
        formTitle: "Empieza a usarlo",
        formSubtitle: "Te enviaremos un correo electrónico con las instrucciones para que puedas comenzar a utilizar nuestro bot.",
        buttonText: "Subscribirme" 
      }
    ]
  }
  
  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>

    {
      box-sizing: border-box;
    }

    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p{
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
  font-family: "Nunito Sans", serif;
  font-optical-sizing: auto;
}

    .subscription-form{
  align-items: center;
  background-color: hsl(198, 100%, 85%);
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  min-height: 100vh;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 10%;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    padding: 3rem 10%;
  }
}

.explanation {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
}

.explanation-title h3 {
  font-size: 2rem;
  font-weight: 800;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
    line-height: 3rem;
    text-align: left;
  }
}

.explanation-info p{
  color: hsl(0, 0%, 50%);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
}

.explanation-featured{
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(10px);
  padding: 1rem;
  width: max-content;
}

.explanation-featured span{
  color: hsl(0, 0%, 100%);
  font-size: 1.2rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
}

.form-container {
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
}

.info-area {
  display: flex;
}

.info-area-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-area-title h4 {
  font-size: 1.8rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
}

.info-area-subtitle span {
  color: hsl(0, 0%, 50%);
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.info-area-icon svg {
  animation: top-bottom 2s infinite;
  width: 5rem;
  fill: hsl(0, 0%, 70%);
  text-align: center;
}

@keyframes top-bottom {
  0%, 100%, 20%, 50%, 80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  60% {
    -webkit-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    transform: translateY(-4px);
  }
}

.form form{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-element-input input {
  border: 2px solid rgb(192, 192, 192);
  border-radius: 1.5rem;
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.form-element-input input:hover {
  border-color: hsl(200, 77%, 52%);
}

.form-element-button button{
  background-color: hsl(200, 77%, 52%);
  border-radius: 1rem;
  color: hsl(0, 0%, 100%);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.form-element-button button:hover{
  background-color: hsl(200, 77%, 42%);
}

    </style>

    <section>
      <div class="subscription-form">
        <div class="explanation">
          <div class="explanation-title"><h3></h3></div>
          <div class="explanation-info"><p></p></div>
          <div class="explanation-featured"><span></span></div>
        </div>
        <div class="form-container">
          <div class="info-area">
            <div class="info-area-text">
              <div class="info-area-title"><h4></h4></div>
              <div class="info-area-subtitle"><span></span></div>
            </div>
          </div>
          <div class="form">
            <form>
              <div class="form-element-input">
                <input type="email" placeholder="Ingresa tu correo">
              </div>
              <div class="form-element-button">
                <button></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    <section>


    `

    this.data.forEach(suscription => {
      const suscriptionContainer= this.shadow.querySelector('.subscription-form')
      if (!suscriptionContainer) return;

      suscriptionContainer.querySelector('.explanation-title h3').textContent = suscription.title;
      suscriptionContainer.querySelector('.explanation-info p').textContent = suscription.content;
      suscriptionContainer.querySelector('.explanation-featured span').textContent = suscription.feautured;
      suscriptionContainer.querySelector('.info-area-title h4').textContent = suscription.formTitle;
      suscriptionContainer.querySelector('.info-area-subtitle span').textContent = suscription.formSubtitle;
      suscriptionContainer.querySelector('.form-element-button button').textContent = suscription.buttonText;
    });
    
  }
}

customElements.define('subscription-form-component', SubscriptionForm);