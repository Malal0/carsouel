<?php
    $slidesColor = ['red', 'green', 'blue'];

    $slidesHtml = '';

    foreach($slidesColor as $slideColor){
        $slidesHtml = $slidesHtml . "<div class=\"slide\" style=\"background-color:$slideColor\" data-id='$slideColor'>Slide - $slideColor</div>";
    }

    $btnsHtml = '';

    foreach($slidesColor as $slideColor){
        $btnsHtml = $btnsHtml . "<input class='carousel-btn' type='radio' value='$slideColor' data-id='$slideColor' name='carousel-btns' />";
    }
?>

<div class='carsouel-component' id='mq-carsouel-component'>
    <div class='content'>
        <div class='slider-container'>
            <?php echo $slidesHtml;?>
        </div>
        <div class='slider-btns'>
            <?php echo $btnsHtml;?>
        </div>
    </div>
</div>