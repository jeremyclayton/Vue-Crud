<template>
<div id="app">

    <body>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <h3 class="text-center">Header</h3>
            </div>
        </nav>
        <router-link to="books"><a href="#" class="btn btn-primary" style="margin-bottom: 0 auto;">View Book</a></router-link>
        <router-view></router-view>
    </body>



</div>
</template>
<style>
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
