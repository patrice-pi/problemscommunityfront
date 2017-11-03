<?php
$page = "accueil";

require('header.php');
?>

<header>
    <div class="container">
        <div class="form-recherche">
            <h1>Trouver la réponse à votre problème :</h1>
            <form class="" action="index.html" method="post" id="form_recherche_posts">
                <input type="text" class="form-control" name="" value="" placeholder="Rechercher un posts">
                <br/>
                <div class="text-right">
                    <button type="button" name="button" class="btn btn-primary">Rechercher</button>
                </div>
            </form>
        </div>
    </div>
</header>

<main id="content">
    <section class="container">
        <div class="row">
            <div class="col-md-9">
                <h2>Les derniers posts :</h2>
                <div id="posts">
                    <ul class="list-unstyled">
                        <post-item v-for="post in posts" v-bind:post="post" v-bind:key="post.id"></post-item>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div id="categories" class="panel panel-primary">
                    <div class="panel-heading">
                        <h2 class="panel-title">Catégories</h2>
                    </div>
                    <div class="panel-body">
                        <ul class="list-unstyled">
                            <li v-for="categorie in categories" class="bg-info" style="padding: 5px; margin-bottom: 10px;">
                              <a :href="categorie.link">{{ categorie.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="categories" class="panel panel-primary">
                    <div class="panel-heading">
                        <h2 class="panel-title">Commentaires</h2>
                    </div>
                    <div class="panel-body">
                        Aucun commentaire
                    </div>
                </div>
                <div id="categories" class="panel panel-primary">
                    <div class="panel-heading">
                        <h2 class="panel-title">Archives</h2>
                    </div>
                    <div class="panel-body">
                        Aucune archive
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
require('footer.php');
?>
