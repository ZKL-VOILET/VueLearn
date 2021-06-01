/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
const app = new Vue({
    el: '#app',
    filters: {
        // 过滤器，在使用时自动传入参数
        showPrice(price) {
            return '$' + price.toFixed(2);
        }
    },
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-10',
                price: 99.00,
                count: 1
            }
        ]
    },
    computed: {
        totalprice() {
            let totalprice = 0;
            for (let book of this.books) {
                totalprice += book.price * book.count;
            }
            return totalprice;
        },
        /**
         * 使用高阶函数reduce求和
         */
        totalprice1() {
            let totalprice = this.books.reduce(function(preValue,book) {
                return preValue + book.price * book.count;
            },0);
            return totalprice;
        }
    },
    methods: {
        decrement(index) {
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeHandle(index) {
            // 移除index位置的书籍
            this.books.splice(index,1);
        }
    }
})