const express = require('express')
const Bookmark = require('../models/bookmark')
const router = new express.Router()


//Creating Bookmarks

router.post('/bookmarks', async (req, res) => {
   const found=await Bookmark.findOne({link:req.body.link}).exec()
   if((found!=null)&&(found.link===req.body.link))
   return res.status(400).send({ error: 'same link exists' })
   else{
   const bookmark = new Bookmark(req.body)
    try {
        await bookmark.save()
        res.status(201).send(bookmark)
    } catch (e) {
        res.status(400).send(e)
    }
}

})


//Retrieve all bookmarks

router.get('/bookmarks', async (req, res) => {
    try {
        const bookmark = await Bookmark.find({})
        res.send(bookmark)
    } catch (e) {
        res.status(500).send(e)
    }
})



//Adding tag to bookmark

router.patch('/bookmarks/add/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = 'tags'
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    
    const bookmark =  await Bookmark.findById(req.params.id)
    const found =  await bookmark.tags.find(element => element === req.body.tags);
    if((found!=null)&&(found===req.body.tags))
    return res.status(400).send({ error: 'same tag exists' })
   else{
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id,
            { $push: { tags: req.body.tags } }, {new: true})

        if (!bookmark) {
            return res.status(404).send()
        }

         await res.send(bookmark)
    } catch (e) {
        res.status(400).send(e)
    }
}
})

//Remove tag from bookmark

router.patch('/bookmarks/remove/:id', async (req, res) => {
    
    try {
        const bookmark = await Bookmark.findOneAndUpdate(req.params.id,
             
            {$pull:{tags:req.body.tags}},{new: true}
            )

        if (!bookmark) {
            return res.status(404).send()
        }

         res.send(bookmark)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete bookmarks

router.delete('/bookmarks/:id', async (req, res) => {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)

        if (!bookmark) {
            return res.status(404).send()
        }

        res.send(bookmark)
    } catch (e) {
        res.status(500).send()
    }
})


//Retreive bookmark by id(optional)

router.get('/bookmarks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const bookmark = await Bookmark.findById(_id)

        if (!bookmark) {
            return res.status(404).send()
        }

        res.send(bookmark)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router