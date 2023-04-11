"use strict";

$(function () {
    $("img").attr("title", "cars");



    $('img').click(function () {
        let imgPath = $(this).attr('src');
        $('#bg').css({
            'background-image': `url('${imgPath}')`,
            'display': 'block'
        })
    });

    $('#bg').css({
        'width': '50%',
        'height': '50%',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'start',
        position: 'fixed',
        top: 50,
        left: 140,
        display: "none",
        'cursor': 'zoom-in'
    })


    $('#bg').click(function () {
        $('#bg').css({
            'width': '75%',
            'height': '75%',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': 'center',
            'background-color': 'rgba(0,0,0,0.5)',
            position: 'fixed',
            top: 50,
            'cursor': 'zoom-out'
        })
    })



})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// $(function () {
//     $("img").attr("title", "cars");



//     $('img').click(function () {
//         let imgPath = $(this).attr('src');
//         $('#bg').css({
//             'background-image': `url('${imgPath}')`,
//             'display': 'block'
//         })
//     });

//     $('#bg').css({
//         'width': '50%',
//         'height': '50%',
//         'background-repeat': 'no-repeat',
//         'background-size': 'contain',
//         'background-position': 'start',
//         position: 'fixed',
//         top: 50,
//         left: 140,
//         display: "none",
//         'cursor': 'zoom-in'
//     })

//     $('#frontimg').css({
//         'width': '100%',
//         'height': '100%',
//         'background-repeat': 'no-repeat',
//         'background-size': 'contain',
//         'background-position': 'center',
//         'background-color': 'rgba(0,0,0,0.5)',
//         position: 'fixed',
//         top: 0,
//         display: "none",
//         'cursor': 'zoom-out'

//     })

//     $('#bg').click(function () {
//        let imgPath = $(this).attr('src');
//         $('#frontimg').css({
//             'background-image': `url('${imgPath}')`,
//             'display': 'block'
//         })
//     })

//     $('#frontimg').click(function () {
//         $('#frontimg').css({
//             'display': 'none'
//         })
//     })


// })

