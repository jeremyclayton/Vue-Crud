<template>
<div id="app">
    <div class="container">
        <router-link to="/"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;">Go Home</a></router-link>

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
        <router-link to="newBook" class="btn btn-primary">Add New Book</router-link>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import store from '../../store.js'
export default {
    created() {
        axios.get(`http://localhost:3000/books`).then(response => {
            this.books = response.data
        });
    },
    data() {
        return {
            books: store.books,
        }
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
