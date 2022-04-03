import {useContext} from 'react'
import "./Cart.css"
import Context from '../../context/Context'

function Cart() {

    const ordr = useContext(Context)

    const delcart = (item) =>
    {
        console.log(item)
    }

  return (
    <div>
        
        <div className="container mt-5 p-3 rounded cart">
    <div className="row no-gutters">
        <div className="col-md-8">
            <div className="product-details mr-2">
                <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left px-3"></i><span className="fs-4 ml-2">Continue Shopping</span></div>

                {ordr.cartItems.map((item)=>
                {
                    return(
                        <div key={item.id} className="cart-p">
                        <img src={item.image} alt="" />
                        <div className="product-info">
                            <h2>{item.title}</h2>
                            <h3>{item.price}</h3>
                            <h4>{item.alt}</h4>
                        </div>
                        <i onClick={(e)=>
                        {
                            ordr.cartItems.splice(item.id,1);
                            console.log(item.id)
                            e.stopPropagation()
                        }} className="fa-solid fa-2x fa-trash-can"></i>
                    </div>
                    )
                })
                }
            </div>
        </div>




    {/* Payment */}

        <div className="col-md-4">
            <div className="payment-info">
                <div className="row">
                    <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24"/></div>
                    <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342"/></div>
                </div>
                <hr className="line"/>
                <div className="d-flex justify-content-between information"><h4>Subtotal</h4><h4>$3000.00</h4></div>
                <div className="d-flex justify-content-between information"><h4>Shipping</h4><h4>$20.00</h4></div>
                <div className="d-flex justify-content-between information"><h4>Total</h4><h4>$3020.00</h4></div>
                <button className="btn btn-primary btn-sell" type="button"><h4>$3020.00</h4><h4>Checkout<i className="fa fa-long-arrow-right ml-1"></i></h4></button>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Cart