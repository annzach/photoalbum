import API from '../API';

const ImageActions = {
 getAllImages:API.getAllImages,

 createImages(image){
  console.log("Inside LA create Images")
  API.createImages(image);
 },

 lookup(author){
  API.lookup(author);
 }

}

export default ImageActions;