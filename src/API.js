import axios from 'axios'
import ImageServerActions from './actions/ImageServerActions'

const API ={
  getAllBooks(){
    axios.get('/api/images')
         .then(res=>res.data)
         .then(ImageServerActions.receiveBooks)
         .catch(console.error);
},

createImages(image) {
   console.log("Inside API create Books")
  axios.post('/api/images',image)
        .then(res=>res.data)
        //.then(console.log(res))
        .then(ImageServerActions.createImage)
        .catch(console.error);
},
lookup(author){
  axios.get('/lookup/:author')
       .then(res=>res.data)
       .then(ImageServerActions.receiveBooks)
       .catch(console.error);
}

}


export default API;