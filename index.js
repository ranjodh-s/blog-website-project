import express from "express";
import bodyParser from "body-parser";
import { writeFile } from 'node:fs';

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

let blog = []

function deleteBlog(index) {
    blog.splice(index, 1)


}

app.get('/', (req, res) => {
    res.render('index.ejs', { blogs: blog })
})

app.post('/create/submit', (req, res) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date().getDate()
    const currentMonth = monthNames[new Date().getMonth()]
    const finalDate = currentMonth + ' ' + currentDate

    let dic = {
        title: req.body.blogTitle,
        content: req.body.blogContent,
        uploadDate: finalDate,
    }

    blog[blog.length] = dic

    res.render('createBlog.ejs', {
        blog: dic
    })
})

app.get('/create', (req, res) => {
    res.render('createBlog.ejs')
})

app.get('/blog/:i', (req, res) => {
    const i = req.params.i
    res.render('blog.ejs', {
        index: i,
        blogs: blog
    })
})

app.get('/delete-blog/:index', (req, res) => {
    deleteBlog(req.params.index)
    res.redirect('/')


})

app.get('/update/:index', (req, res) => {

    res.render('updateBlog.ejs', {
        index: req.params.index,
        blogs: blog
    })
})

app.post('/update/submit/:index', (req, res) => {
    let title = req.body.blogTitle;
    let desc = req.body.blogDesc;
    let content = req.body.blogContent;
    let index = req.params.index
    if (blog[index]) {
        blog[index]['title'] = title;
        blog[index]['desc'] = desc;
        blog[index]['content'] = content;
        res.redirect('/');

    } else {
        res.status(404).send("Blog not found");
    }
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})