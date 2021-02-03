const { Router } = require('express');
const faker = require('faker');
const router = Router();
const Article = require('../models/article');
router.get('/create', async(req,res) => {
    // console.log(faker.name.title());
    // console.log(faker.image.imageUrl());
    // console.log(faker.lorem.paragraph());

    for(let i = 0; i<=100; i++){
        await Article.create({
            title : faker.name.title(),
            imageUrl : faker.image.imageUrl(),
            description : faker.lorem.paragraph()
        })
    }
    res.send('100 registros creados');
})

router.get('/articles', async(req,res) => {
   const articles =  await Article.find();
   res.json({articles});
})

module.exports = router;