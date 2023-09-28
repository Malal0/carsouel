<?php

//file path to uri
  function mq_path() {
    global $themeDir;
    $themeDir = get_template_directory_uri();
    return $themeDir;
  }
  function mq_load_styles_scripts() {
    $theme_info = wp_get_theme();
    $theme_version = $theme_info->display( 'Version' );

  // Stylesheets
    wp_enqueue_style( 'mq-cd', mq_path() . '/style.css', array(), '1.1' );
    // wp_enqueue_style( 'mq-adobe-fonts', 'https://use.typekit.net/nbo6nmg.css' );
    // wp_enqueue_style( 'mq-google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap' );

  // Scripts
      wp_enqueue_script('custom-script-2', mq_path() . '/javascript/main.js', array(), '1.0', true);
  }

  add_action( 'wp_enqueue_scripts', 'mq_load_styles_scripts' );

  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu', 'fresh' ),
      'mobile-menu' => __( 'Mobile Menu', 'fresh' )
    )
  );

  add_theme_support( 'post-thumbnails' );

?>