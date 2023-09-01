<?php
$themeOpts = get_option( ' '); //theme options array
?>

<!DOCTYPE html>
<html lang="en" class="html-bounce-scroll">
<head>
    <?php wp_head();?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel</title>
</head>
<body class="initial">
<div id="page-container">
    <section class='section'>
        <div class='container'>
            <div class='content'>
                <?php get_template_part('components/carousel');?>
            </div>
        </div>
    </section>
</div>
    
<?php get_footer(); ?>