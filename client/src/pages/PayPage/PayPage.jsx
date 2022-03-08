import './PayPage.css'


function PayPage() {
    return ( 
        <>
<div className="togethere-background"></div>
    <div className="sr-root">
      <div className="sr-main">
        <header className="sr-header">
          <div className="sr-header__logo"></div>
        </header>
        <h1>Choose a collaboration plan</h1>

        <div className="price-table-container">
          <section>
            <form action="/create-checkout-session" method="POST">
              <input type="hidden" id="basicPrice" name="priceId" />
              <img
                src="/img/starter.png"
                width="120"
                height="120"
                />
              <div className="name">Starter</div>
              <div className="price">$12</div>
              <div className="duration">per month</div>
              <button id="basic-plan-btn">Select</button>
            </form>
          </section>
          <section>
            <form action="/create-checkout-session" method="POST">
              <input type="hidden" id="proPrice" name="priceId"/>
              <img
                src="/img/professional.png"
                width="120"
                height="120"
                />
              <div className="name">Professional</div>
              <div className="price">$18</div>
              <div className="duration">per month</div>
              <button id="pro-plan-btn">Select</button>
            </form>
          </section>
        </div>
      </div>
    </div>
    <div id="error-message" className="error-message"></div>
    </>
     )
}

export default PayPage