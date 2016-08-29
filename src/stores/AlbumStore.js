import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _album = [];

class AlbumStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {

        case 'RECEIVE_ALBUMS':
         _album = action.images;
          this.emit('CHANGE');
          break;

        case 'CREATE_ALBUM':
          var { album } = action;
         _album.push(album);
          console.log('image:',album)
          this.emit('CHANGE');
          break;

        case 'DELETE_ALBUM':this.emit('CHANGE');
                            break;

   
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    console.log("inside get all");
    console.log(_album);
    return _album;
  }


}

export default new AlbumStore();