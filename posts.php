<?php
$page = "posts";

require('header.php');
?>
<main id="content">
    <section class="container">
        <h2>Derniers Posts :</h2>
        <div class="row">
            <div class="col-md-9">
                <div id="posts">
                    <ul class="list-unstyled">
                        <post-item v-for="post in posts" v-bind:post="post" v-bind:key="post.id"></post-item>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div id="categories">
                    <ul class="list-unstyled">
                        <li v-for="categorie in categories">
                          {{ categorie.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/>
    </section>
</main>

<?php
require('footer.php');
?>
