const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/cat-cafe.jpg'
      }]
      
    res.render('places/index', {places})
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places/:id
// router.get('/:id', (req, res) => {
//   res.render('places/new')
// })

router.post('/', (req, res) => {
  // console.log(req)
  console.log(req.body)
  // res.send('POST /places')
  res.redirect('/places')
})

module.exports = router

