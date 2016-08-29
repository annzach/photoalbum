import React , {Component} from 'react';
import ImageActions from '../actions/ImageActions'
import {browserHistory} from 'react-router'


export default class AddImages extends Component {

   constructor() {
    super();
    this.state ={
      imageurl:''
    }
    this.submitImage=this.submitImage.bind(this);
  }


  submitImage(e){
   console.log('hi dude');
    e.preventDefault();
    console.log("click me")
    let image = {
      imageurl:this.state.imageurl
    }
    console.log(image);
    
   ImageActions.createImages(image);
    this.setState({'image' : ''});
   //browserHistory.push('/searchpage');
  }
  render() {
    let {image} = this.state;

    return (
      <div>
       <form className ="formStyle" onSubmit={this.submitImage} >
        <div className="container form-group">
            <input type="text" value = {this.state.imageurl} placeholder ="ImageURL" className="form-control input-lg input1"
              onChange={e=>this.setState({imageurl:e.target.value})}/>
          </div>


          <div  className="container form-group text-center">
            <button type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>

        </form>
 
      </div>
    )
  }
}
