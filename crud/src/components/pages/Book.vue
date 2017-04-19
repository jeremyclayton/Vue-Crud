<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div v-for="book in oneBook" class="card col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img class="card-img-top" :src="book.cover_url" alt="Card image cap">
                    <div class="card-block">
                        <h4 class="card-title">{{book.title}}</h4>
                        <p v-for="author in book.authors"class="card-text">{{author.first_name}} {{author.last_name}}</p>
                        <router-link to="book"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;" v-on:click="onClick(book)">View Book</a></router-link>
                        <router-link to="/"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;">Go back</a></router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import store from '../../store.js'


export default {
    data() {
        return {
            book: store.selectedBook,
            oneBook: []
        }
    },
    created() {
        axios.get(`http://localhost:3000/books/${this.book.book_id}`).then(response => {
            console.log(response.data);
            this.oneBook = response.data
        });
    }
}
</script>

<style lang="css">


</style>
