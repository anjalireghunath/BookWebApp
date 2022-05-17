import React from 'react'
import Navbar from './Navbar'

const Viewbook = () => {
    var booklist=[{
        "title":"Wings of Fire",
        "price":"250",
        "author":"APJ",
        "image":"https://wallpaperaccess.com/full/1209397.jpg"
    },
    {
        "title":"Half GirlFriend",
        "price":"300",
        "author":"Chethan Bhagat",
        "image":"https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
    },
    {
        "title":"Xmas Carol",
        "price":"200",
        "author":"Mathew",
        "image":"https://wallpaperaccess.com/full/124378.jpg"
    }
    ]
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-5">
               {booklist.map((value,key)=>{
                   return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                   <div class="card">
                   <img src={value.image} class="card-img-top" alt="..."/>
                   <div class="card-body">
                     <h5 class="card-title">{value.title}</h5>
                     <p class="card-text">Price:  {value.price}</p>
                     <p class="card-text">Author:  {value.author}</p>
                     <a href="#" class="btn btn-primary">Buy Now</a>
                   </div>
                 </div>
                 </div>
               })}
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewbook
