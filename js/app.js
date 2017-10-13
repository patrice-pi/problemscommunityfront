Vue.component('post-item', {
  props: ['post'],
  template: '<li v-bind:class="post.category ">'+
            '<a :href="post.link"><h3>{{ post.id + " - " + post.title }}</h3>'+
            '<p>{{ post.description }}</p>'+
            '</a>'+
            '</li>'
})

var posts = new Vue({
  el: '#posts',
  data: {
    posts: [
      {
          id: 1,
          category: "php",
          title: 'Bug in PHP array()',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.google.fr",
      },
      {
          id: 2,
          category: "html",
          title: 'Using Json data with React state. Not able to get the right data',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.stackoverflow.com",
      },
      {
          id: 3,
          category: "js",
          title: 'Json decode file not working',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.google.fr/imghp?hl=fr&tab=wi"
      },
      {
          id: 4,
          category: "js",
          title: 'Json decode file not working',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.google.fr/imghp?hl=fr&tab=wi"
      },
      {
          id: 5,
          category: "html",
          title: 'Json decode file not working',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.google.fr/imghp?hl=fr&tab=wi"
      },
      {
          id: 6,
          category: "php",
          title: 'Json decode file not working',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.google.fr/imghp?hl=fr&tab=wi"
      },
      {
          id: 7,
          category: "php",
          title: 'Json decode file not working',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ?',
          link: "https://www.google.fr/imghp?hl=fr&tab=wi"
      }
    ]
  }
})


var categories = new Vue({
  el: '#categories',
  data: {
    categories: [
      {
          title: 'PHP',
          link: 'http://www.php.net',
      },
      {
          title: 'Javascript',
          link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
      },
      {
          title: 'Jquery',
          link: 'https://jquery.com/',
      },
      {
          title: 'HTML',
          link: 'https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/votre-premiere-page-web-en-html',
      },
      {
          title: 'CSS',
          link: 'https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/votre-premiere-page-web-en-html',
      },
      {
          title: 'SQL',
          link: 'http://sql.sh/',
      },
    ]
  }
})
