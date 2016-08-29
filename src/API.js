import axios from 'axios'
import ImageServerActions from './actions/ImageServerActions'

const API ={
  getAllImages(){
    console.log("Inside API get all IMages")
    axios.get('/api/images')
         .then(res=>res.data)
         .then(ImageServerActions.receiveImages)
         .catch(console.error);
},

createImages(image) {
   console.log("Inside API create Images")
  axios.post('/api/images',image)
        .then(res=>res.data)
        //.then(console.log(res))
        .then(ImageServerActions.createImage)
        .catch(console.error);
},
lookup(author){
  axios.get('/lookup/:author')
       .then(res=>res.data)
       .then(ImageServerActions.receiveImages)
       .catch(console.error);
},

deleteImage(id){
    axios.delete('/api/images/'+id)
         .then(res=>res.data)
         .then(ImageServerActions.deleteImage)
         .catch(console.error);
  },

}


export default API;