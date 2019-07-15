<template>
    <div>
        <header >
  <nav class="navbar navbar-expand-md fixed-top navbar-light" style="background-color: #fc65f5;">
    <a class="navbar-brand" href="#">Rose Dades</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <router-link class="nav-link "  to="/" >Acceuil <span class="sr-only" v-if="$router.currentRoute.name == 'home'">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/store" >Marché <span class="sr-only" v-if="$router.currentRoute.name == 'store'">(current)</span></router-link>
        </li>
        <li class="nav-item" >
          <router-link class="nav-link" to="/contact" >Nous Contacter <span class="sr-only" v-if="$router.currentRoute.name == 'contact'">(current)</span></router-link>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</header>

    </div>
</template>


<script>
export default {
    data() {
        return {
            data: true,
        }
    },


}
</script>
