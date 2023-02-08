const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const authorname = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, suscipit!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="">'
    authorname.innerHTML = 'Jane Doe'

    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const d = new Date();
    let currentmonth = month[d.getMonth()];
    let currentday = d.getDate();
    let currentyear = d.getFullYear();

    date.innerHTML = `${currentmonth} ${currentday}, ${currentyear}`

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((text) => text.classList.remove('animated-bg-text'))
}