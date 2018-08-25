$(document).ready(function () {



    var test = true;
    var morrisCount = true;
    var countDefeated = 0;

    //Counter
    var slaterCount = 0;
    var morrisCount = 0;
    var kellyCount = 0;
    var spanoCount = 0;

    //Disable button
    var disableBtn = true;
    //other fighters move when morris selected

    $('.morris').on('click', function (i) {
        if (morrisCount === true) {
            $(this).addClass('main');
            slaterCount++;
            //Changes to false so fighter wont move to enemy area
            morrisCount = false;
            // adds fighters not clicked to enemy section
            $('.morris').appendTo('.enemyBox').css({ 'height': auto, 'width': auto, 'background-color': 'purple' });

            $('.slater').appendTo('.enemyBox').css({ 'height': auto, 'width': auto, 'background-color': 'purple' });

            $('.kelly').appendTo('.enemyBox').css({ 'height': auto, 'width': auto, 'background-color': 'purple' });


            $('.spano p').css({ 'margin-left': '30px' });
            //Adjusted css to restore
            $('.enP').css({
                'width': auto,
                'height': auto,
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        }
        else if (morrisCount === false && slaterCount === 0) {
            //Enables attack button after enemy is selected
            morrisCount++;
            kellyCount++;
            spanoCount++;
            disableBtn = false;
            $('.morris').appendTo('.enemyBox').addClass("def").css({ 'background-color': 'black', 'color': 'purple' });

        }
    });

    $('.slater').on('click', function (b) {
        if (morrisCount === true) {
            $(this).addClass('main');
            morrisCount++;
            morrisCount = false;
            $('.morris').appendTo('.enemyBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'purple' });


            $('.kelly').appendTo('.enemyBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'purple' });


            $('.spano').appendTo('.enemyBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'purple' });


        }
        else if (morrisCount === false && morrisCount === 0) {
            //Enables attack button after enemy is selected
            disableBtn = false;
            slaterCount++;
            kellyCount++;
            spanoCount++;
            $('.slater').appendTo('.enemyBox').addClass("def").css({ 'background-color': 'black', 'color': 'purple' });

        }
    });
    // move non-fighters
    $('.kelly').on('click', function (c) {
        if (morrisCount === true) {
            $(this).addClass('main');
            kellyCount++;
            morrisCount = false;
            $('.morris').appendTo('.enemyBox').css({ 'background-color': 'purple' });


            $('.morris').appendTo('.enemyBox').css({ 'background-color': 'purple' });


            $('.morris').appendTo('.enemyBox').css({ 'background-color': 'purple' });

            //restore css
            $('.rePic').css({
                'width': '100px',
                'height': '100px',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        }
        else if (morrisCount === false && kellyCount === 0) {
            //Enables attack button after enemy is selected
            disableBtn = false;
            morrisCount++;
            slaterCount++;
            spanoCount++;
            $('.kelly').appendTo('.enemyBox').addClass("def").css

        }
    });
    // move non-fighters
    $('.spano').on('click', function (d) {
        if (morrisCount === true) {
            $(this).addClass('main');
            spanoCount++;
            morrisCount = false;
            $('.morris').appendTo('.enemyBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'purple' });



            $('.slater').appendTo('.enemyBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'purple' });


            $('.kelly').appendTo('.enemyBox').css({ 'height': '150px', 'width': '100px', 'background-color': 'purple' });

            //restore css
            $('.rePic').css({
                'width': '100px',
                'height': '100px',
                'margin-left': 'auto',
                'margin-right': 'auto',
                'display': 'block'
            });
        }
        else if (morrisCount === false && spanoCount === 0) {
            //Enables attack button after enemy is selected
            disableBtn = false;
            morrisCount++;
            slaterCount++;
            kellyCount++;
            $('.spano').appendTo('.enemyBox').addClass("def").css({ 'background-color': 'black', 'color': 'purple' });

        }
    });
    //----------------------Attack-----------------
    $('.attackBtn').on('click', function (e) {
        if (disableBtn === false) {
            var frName = $('.def').attr('fName');

            var healthMain = $('.main').attr('health');
            //attack
            var attackMain = $('.main').attr('attack');
            //health value 
            var healthEnemy = $('.def').attr('health');
            // counter attack value
            var counterAttack = $('.def').attr('counterAttack');
            //attack health change
            var healthMainAfter = healthMain - counterAttack;

            var healthEnAfter = healthEnemy - attackMain;

            var healthMain1 = $('.main').attr('health', healthMainAfter);

            var healthEn1 = $('.def').attr('health', healthEnAfter);

            $('.main p').html($('.main').attr("health"));

            $('.def p').html($('.def').attr("health"));

            $('.enemy').html('<p>' + 'You attacked ' + frName +
                ' for ' + attackMain + ' damage ' +
                frName + ' counter attacked ' +
                counterAttack + ' </p>').css({ 'font-size': '20px', 'text-align': 'center' });

            attackMain = attackMain * 2;
            //Updates the main Characters attack 
            var attackMain1 = $('.main').attr('attack', attackMain);
            //locks attck btn after game over
            if (healthMainAfter <= 0) {
                $('.enemy').html('<p>' + 'You have been defeated...Game Over!!!' + ' </p>').css({ 'font-size': '20px' });
                $('.main').remove();
                this.disabled = true;

            }
            else if (healthEnAfter <= 0) {
                //enemy slater
                if ($('.def.morris').attr('health') <= 0) {
                    console.log(true);
                    spanoCount--;
                    kellyCount--;
                    morrisCount--;

                    $('.def').remove();
                    $('.enemy').html('<p>' + 'You have defeated ' + frName +
                        ' choose a new enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
                }

                else if ($('.def.slater').attr('health') <= 0) {
                    console.log(true);
                    spanoCount--;
                    kellyCount--;
                    slaterCount--;

                    $('.def').remove();
                    $('.enemy').html('<p>' + 'You have defeated ' + frName +
                        ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
                }

                else if ($('.def.kelly').attr('health') <= 0) {
                    console.log(true);
                    spanoCount--;
                    morrisCount--;
                    slaterCount--;

                    $('.def').remove();
                    $('.enemy').html('<p>' + 'You have defeated ' + frName +
                        ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                    countDefeated++;
             
                    else if ($('.def.spano').attr('health') <= 0) {
                        console.log(true);
                        morrisCount--;
                        slaterCount--;
                        kellyCount--;

                        $('.def').remove();
                        $('.enemy').html('<p>' + 'You have defeated ' + frName +
                            ' choose to fight another enemy.' + '</p>').css({ 'font-size': '20px' });
                        countDefeated++;
                    }

                    if (countDefeated === 3) {
                        $('.enemy').html('<p>' + "Congrats, you are the baddass of bayside" + '</p>').css({ 'font-size': '40px' })
                        console.log('count after**** ' + countDefeated);
                        this.disabled = true;

                    }
                }
            }
        });
});