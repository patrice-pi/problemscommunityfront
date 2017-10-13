<?php
  $page = "posts";

  require('header.php');
?>

  <main>
    <div id="vueApp">
  <div class="container">

    <div class="row">
      <div class="col-sm-12">
        <a href="#"
           class="btn btn-success"
          >Load Users</a>
      </div>
    </div> <!-- /row -->

    <div class="row">
      <div class="col-sm-12">

        <h3>
          User List
        </h3>
        <ul>
          <li v-for="data in datas">
            {{ data.marque }} - {{ data.prix }}
          </li>
        </ul>

      </div>
    </div> <!-- row -->

    <div class="row" v-if="debug">
      <div class="col-sm-12">
        <h3>
          Vuejs Debug Data
        </h3>
        <pre>{{ $data }}</pre>
      </div>
    </div> <!-- /row -->
  </div>
</div>
  </main>


<?php
  require('footer.php');
?>
