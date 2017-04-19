<template>
<div id="app">

    <body>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <h3 class="text-center">Header</h3>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div v-for="book in books" class="card col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img class="card-img-top" :src="book.cover_url" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">{{book.title}}</h4>
                        <p v-for="author in book.authors"class="card-text">{{author.first_name}} {{author.last_name}}</p>
                        <router-link to="book"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;" v-on:click="onClick(book)">View Book</a></router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div v-for="book in books">
            <h1>{{ book.title }}</h1> <br />

            <h3 v-model="book.author" v-for="author in authors" :value="author.first_name">{{ author.first_name }}</h3>

        </div> -->
    </body>


    <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios'
import store from './store.js'
export default {
    data() {
        return {
            books: store.books,
        }
    },
    created() {
        axios.get(`http://localhost:3000/books`).then(response => {
            console.log(response.data);
            this.books = response.data
        });
    },
    methods: {
        onClick: function (book){
            store.selectedBook = book
        }
    }
}
</script>

<style lang="css">
.card {
    border: solid black 1px;
    height: 38em;
    /*display: flex;
    flex-direction: column;
    align-content: center;*/
}
.card-img-top {
    width: 15em;
    display: flex;
    align-self: flex-end;
}
body {
    padding-top: 40px;
}


</style>
