<?php get_header(); ?>

<div class="index-page">
    <?php
    if ( have_posts() ) { 
        while ( have_posts() ) : the_post();
        the_content();
    endwhile;
    }
    ?>
<div>

<?php get_footer(); ?>