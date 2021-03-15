new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  })
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
    }
  })
  app2.message = 'Cái gì đó khác';
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })
  app3.seen=false;
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Học JavaScript' },
        { text: 'Học Vue' },
        { text: 'Xây dựng cái gì đó hay ho' }
      ]
    }
  })
  app4.todos.push({text:'nghỉ ngơi'});
  var app5 = new Vue({
      el:"#app-5",
      data:{message:'quay lại khách chờ sông lặng gió'},
      methods:{
        reverMessage: function(){
            this.message=this.message.split(' ').reverse().join(' ')
      }
  }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hãy sửa thông điệp này'
    }
  })
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Cà pháo' },
        { id: 1, text: 'Mắm tôm' },
        { id: 2, text: 'Miễn ăn được là được' }
      ]
    }
  })
  var vm = new Vue({
    el: '#example',
    data: {
      message: 'người đông bến đợi thuyền xuôi ngược'
    },
    computed: {
      // một computed getter
      reversedMessage: function () {
        // `this` trỏ tới đối tượng vm
        return this.message.split(' ').reverse().join(' ')
      }
    }
  })
  vm.message = 'xa ngân tiếng hát đàn trầm bổng'
  var vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'Trần',
      lastName: 'Lập',
      fullName: 'Trần Lập'
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  })
 
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'Không thể trả lời nếu bạn chưa đặt câu hỏi!'
  },
  watch: {
    // bất cứ lúc nào câu hỏi thay đổi, hàm bên dưới sẽ chạy
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Đang chờ bạn đặt xong câu hỏi...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce là một hàm do Lodash cung cấp
    // Để tìm hiểu rõ hơn cách hoạt động của hàm này,
    // bạn có thể truy cập: https://lodash.com/docs#debounce 
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Câu hỏi thì thường chứa một dấu "?" ;-)'
          return
        }
        this.answer = 'Đang suy nghĩ...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Lỗi! Không thể truy cập API. ' + error
          })
      },
      // Đây là thời gian (đơn vị mili giây) chúng ta đợi người dùng dừng gõ.
      500
    )
  }
})
new Vue({
    el: '#v-for-object',
    data: {
      object: {
        // tất nhiên chúng ta đều biết ông Bành Tổ không phải
        // họ Bành tên Tổ, nhưng đây chỉ là một ví dụ…
        'họ': 'Bành',
        'tên': 'Tổ',
        'tuổi': 800
      }
    }
  })
  var example1 = new Vue({
    el: '#example-1',
    data: {
      counter: 0
    }
  })
  var example2 = new Vue({
    el: '#example-2',
    data: {
      name: 'Vue.js'
    },
    // định nghĩa phương thức trong object `methods`
    methods: {
      greet: function (event) {
        // bên trong một phương thức, `this` trỏ đến đối tượng Vue
        alert('Xin chào ' + this.name + '!')
        // `event` là sự kiện DOM native
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  })
  
  // bạn cũng có thể gọi phương thức từ JavaScript
  example2.greet() 
  new Vue({
    el: '#example-3',
    methods: {
      say: function (message) {
        alert(message)
      }
    }
  })
  new Vue({
    el: '#example-3',
    data: {
      checkedNames: []
    }
  })
 