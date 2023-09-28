<?php
    $slidesColor = ['hsl(0, 0%, 90%)', 'hsl(0, 0%, 70%)', 'hsl(0, 0%, 50%)'];

    $slidesHtml = '';

    foreach($slidesColor as $slideColor){
        $slidesHtml = $slidesHtml . "<div class=\"slide\" style=\"background-color:$slideColor\" data-id='$slideColor'>Slide - $slideColor</div>";
    }

    $btnsHtml = '';

    foreach($slidesColor as $slideColor){
        if(array_search($slideColor, $slidesColor) === 0){
            // $btnsHtml = $btnsHtml . "<input class='carousel-btn' type='radio' value='$slideColor' data-id='$slideColor' name='carousel-btns' checked />";
            $btnsHtml = $btnsHtml . "<div class='carousel-btn current' value='$slideColor' data-id='$slideColor'></div>";
        }else{
            // $btnsHtml = $btnsHtml . "<input class='carousel-btn' type='radio' value='$slideColor' data-id='$slideColor' name='carousel-btns' />";
            $btnsHtml = $btnsHtml . "<div class='carousel-btn' value='$slideColor' data-id='$slideColor'></div>";
        }
    }
?>

<div class='carousel-component' id='mq-carsouel-component'>
    <div class='content'>
        <div class='slider-container'>
            <?php echo $slidesHtml;?>
        </div>
        <div class='slider-btns'>
            <?php echo $btnsHtml;?>
        </div>
    </div>
</div>