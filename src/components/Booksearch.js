import React from 'react'
import Navbar from './Navbar'

const Booksearch = () => {
  return (
    <div>
<Navbar/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <label for="" class="form-label">Book Title</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <button class="btb btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Booksearch