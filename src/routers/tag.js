const express = require('express')
const Bookmark = require('../models/bookmark')
const Tag = require('../models/tag')
const router = new express.Router()

//Creating tag 
 
router.post('/tags', async (req, res) => {
   
    const found=await Tag.findOne({title:req.body.title}).exec()
    if((found!=null)&&(found.title===req.body.title))
    return res.status(400).send({ error: 'same title exists' })
  else{
      const tag = new Tag(req.body)
      
      try {
          await tag.save()
          res.status(201).send(tag)
      } catch (e) {
          res.status(400).send(e)
      }
  }
  
  })


//Retrieve all tags

router.get('/tags', async (req, res) => {
    try {
        const tags = await Tag.find({})
        res.send(tags)
    } catch (e) {
        res.status(500).send()
    }
})

//Delete tag by id

router.delete('/tags/:id', async (req, res) => {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)

        if (!bookmark) {
            res.status(404).send()
        }

        res.send(bookmark)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
