const link = document.getElementById('linkOne');
const drop = document.getElementById('dropDown');
const closeBtn = document.getElementById('close');
const twitter = document.getElementById('twitter');

twitter.addEventListener('click', () => {
    if (confirm("Are you sure you want to visit twitter?") == true) {
        console.log('Went to twitter B)')
    } else {
        console.log('Did not go to twitter :c')
    }
})

link.addEventListener('click', () => {
    drop.classList.toggle('toggle')
});

closeBtn.addEventListener('click', () => {
    drop.classList.toggle('toggle');
})

