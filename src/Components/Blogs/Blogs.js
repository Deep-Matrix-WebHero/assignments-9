import React from 'react';
import './Blogs.css'

const Blogs = (props) => {
  // blogs second part
  const {types,id,title,url,date} = props.data
  return (
    // showing card
  <div class="col-lg-4 my-2">
      <div class="card-group">
  <div class="card">
    <img src={url} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{types}</h5>
      <p id="paragraph" class="card-text">{title}</p>
      <p class="card-text"><small class="text-muted">Published Date : {date} </small></p>
    </div>
   </div>       
</div>
  </div>
  );
};

export default Blogs;