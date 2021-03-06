Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
})
new Vue({ el: '#components-demo' })

Vue.component('button-read', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Bạn đã bấm {{ count }} lần.</button>'
})
new Vue({ el: '#components-demo1' })
Vue.component('blog-post',{
  props:['title'],
  template:'<h3>{{title}}</h3>'
})
new Vue({ el: '#components-demo2' })
Vue.component('child', {
  props: ['message'],
  template: '<h1>{{ message }}</h1>',
  
});
var app = new Vue({
  el: '#app',
});
Vue.component('child', {
  props: ['mySay'],
  template: '<h1>{{ mySay }}</h1>',

});
var app = new Vue({
  el: '#app2',
  data: {
      message : null
  }
});
Vue.component('child',{
  template: '<button v-on:click="numberPlus">{{ count }}</button>',
  data: function(){
    return {count:0};
  },
  methods:{
    numberPlus: function(){
      this.count +=1;
      this.$emit('counter')
    }
  }
});
var app = new Vue({
  el:'#app3',
  data:{
    count:0
  },
  methods:{
    countPlus: function(){
      this.count +=1;
    }
  }
});
Vue.component('child', {
  template: '<button>Click</button>'
});
var app = new Vue({
  el: '#app4',
  data: {
      count: 0
  },
  methods: {
      countPlus: function ()
      {
          this.count += 1;
      }
  }
});
var demo = new Vue({

  // A DOM element to mount our view model.
  el: '#main',

  // This is the model.
  // Define properties and give them initial values.
  data: {
      active: 'home'
  },

  // Functions we will be using.
  methods: {
      makeActive: function(item){
          // When a model is changed, the view will be automatically updated.
          this.active = item;
      }
  }
});
Vue.filter('currency',function(value){
  return '$' + value.toFixed(2);
});
// Define a custom filter called "currency". 
Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

var demo = new Vue({
  el: '#main1',
  data: {
      // Define the model properties. The view will loop
      // through the services array and genreate a li
      // element for every one of its items.
      services: [
          {
              name: 'Web Development',
              price: 300,
              active:true
          },{
              name: 'Design',
              price: 400,
              active:false
          },{
              name: 'Integration',
              price: 250,
              active:false
          },{
              name: 'Training',
              price: 220,
              active:false
          }
      ]
  },
  methods: {
      toggleActive: function(s){
          s.active = !s.active;
      },
      total: function(){

          var total = 0;

          this.services.forEach(function(s){
              if (s.active){
                  total+= s.price;
              }
          });

         return total;
      }
  }
});

var demo = new Vue({
  el: '#main2',
  data: {
      searchString: "",


      articles: [
          {
              "title": "What You Need To Know About CSS Variables",
              "url": "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
              "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
          },
          {
              "title": "Freebie: 4 Great Looking Pricing Tables",
              "url": "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
              "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
          },
          {
              "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
              "url": "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
              "image": "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
          },
          {
              "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
              "url": "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
              "image": "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
          },
          {
              "title": "Learn SQL In 20 Minutes",
              "url": "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
              "image": "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
          },
          {
              "title": "Creating Your First Desktop App With HTML, JS and Electron",
              "url": "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
              "image": "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
          }
      ]
  },
  computed: {
    
      filteredArticles: function () {
          var articles_array = this.articles,
              searchString = this.searchString;

          if(!searchString){
              return articles_array;
          }

          searchString = searchString.trim().toLowerCase();

          articles_array = articles_array.filter(function(item){
              if(item.title.toLowerCase().indexOf(searchString) !== -1){
                  return item;
              }
          })

          // Return an array with the filtered data.
          return articles_array;;
      }
  }
});