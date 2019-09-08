import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Filter extends Component {

  render () {
    return (     
      <section className='filters'>
          <h4>Filter</h4>
          <select name='Location'>
              <option disabled selected>Location</option>
              <option>Toronto</option>
              <option>Markham</option>
          </select>
          <select name='Type'>
              <option disabled selected>Type</option>
              <option>Townhouse</option>
              <option>House</option>
          </select>
          <select name='Bedrooms'>
              <option disabled selected>Bedrooms</option>
              <option>2 Br</option>
              <option>3 Br</option>
          </select>

        <div className='range price'>
            <span>Price</span>
            <input type="text" name="price-min" id="price-min" placeholder='$'/>
            <input type="text" name="price-max" id="price-max" placeholder='$'/>
        </div>
        <div className='range floorspace'>
            <span>Floor Space</span>
            <input type="text" name="floor-min" id="floor-min" placeholder='ft&sup2;'/>
            <input type="text" name="floor-max" id="floor-max" placeholder='ft&sup2;'/>
        </div>
          <div className='extras'>
              <p>Facilities</p>  
            <label for='elevator'>
                <span>Elevator</span>
                <input type='checkbox' name='elevator'></input>
                <hr></hr>
            </label> 
            <label for='pool'>
                <span>Swimming Pool</span>
                <input type='checkbox' name='pool'></input>
                <hr></hr>
            </label>
            <label for='basement'>
                <span>Basement</span>
                <input type='checkbox' name='basement'></input>
                <hr></hr>
            </label>        
        </div> 
      </section>
    )
  }


}