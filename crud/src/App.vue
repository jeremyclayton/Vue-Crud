<template>
<div id="app">
    <nav>

    </nav>
    <div  class="row">
        <div v-for="book in books" class="card col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <img  class="card-img-top" :src="book.cover_url" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">{{book.title}}</h4>
                <p class="card-text">{{book.description}}</p>
                <router-link to ="book"><a href="#" class="btn btn-primary">View Book</a></router-link>
            </div>
        </div>
    </div>

    <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            books: []
        }
    },
    created() {
        axios.get(`http://localhost:3000/books`).then(response => {
            this.books = response.data
        });
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
</style>
