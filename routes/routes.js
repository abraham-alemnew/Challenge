import baseCtrl from '../controllers/baseCtrl'
import deleteCtrl from '../controllers/deleteCtrl'
import insertionCtrl from '../controllers/insertionCtrl'
import searchCtrl from '../controllers/searchCtrl'
import getAll from '../controllers/getAll'  
import editCtrl from '../controllers/editCtrl'
import filterCtrl from '../controllers/filterCtrl'
import filterImagesCtrl from '../controllers/filterImagesCtrl'


const routes = (router) => {
  router.route('/basePage')
    .get(baseCtrl.basePage)

  router.route('/')
    .post(insertionCtrl.insertValue)

  router.route('/search/id/:id')
    .get(searchCtrl.searchById)

  router.route('/delete/id/:id')  
    .delete(deleteCtrl.deleteById)

  router.route('/items')
    .get(getAll.getAllItems) 

  router.route('/:id')
    .put(editCtrl.editValue)

    router.route('/items/:category')
    .get(filterCtrl.filterCategory) 

    router.route('/items/images/more-than-one')
    .get(filterImagesCtrl.filterImageSize);
   
}

export default routes
