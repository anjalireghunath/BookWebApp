import React from 'react'
import Navbar from './Navbar'

const Viewbook = () => {
    var booklist={
        "title":"Wings of Fire",
        "price":"250",
        "author":"APJ"
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <label for="" className="form-label">{booklist.title}</label>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <label for="" className="form-label">{booklist.price}</label>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <label for="" className="form-label">{booklist.author}</label>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewbook