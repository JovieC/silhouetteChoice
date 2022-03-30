        /* create timeline */
        var timeline = [];

        /* choice task data by trial */

// var image = ['finalPics FemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png'];
// // var images = ['img/finalPics FemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png'];

// // // these array can be passed into the preload plugin using the images, audio 
// // // and video parameters
// var preload = {
//      type: 'preload',
//      images: image
// }

// timeline.push(preload);


        /* randomize trials */
        // var shuffleTrials = jsPsych.randomization.repeat(images,1);

        
        var welcome = {
            type: "html-keyboard-response",
            stimulus: "You will start the choice task now. Please press any key to proceed."
        };
        timeline.push(welcome);
        

        var trial = {
            type: 'html-button-response',
            stimulus:  '+',
            choices: ['1', '2', '3', '4'],
        };
        timeline.push(trial);

            // create an empty html string
    var html = '';




        /* instructions
        var baselineInstruction = {
            type: "html-keyboard-response",
            choices: ['d','k'],
            stimulus: `
            <p>You are the captain of a ship. One day, a storm hits your ship and it is sinking.</p><p>However, not enough lifeboats are available.</p><p>Only half of the passengers can get on a lifeboat and you have to decide who will get on and who will be left to death on the ship.</p><p>You will see 36 pairs of human lives and, in each pair, please choose one so that person will get on the life boat and be saved.</p><p>Please press the letter <strong>[D]</strong> on the keyboard if you want to save the life on the left and press the letter <strong>[K]</strong> if you want tos save the life on the right.</p>
            `,
            post_trial_gap: 2000
            };
        */

        
        
        // for (var values of shuffleTrials) {
        //     var fixation = {
        //         type: 'html-keyboard-response',
        //         stimulus: '<p style="font-size:x-large;">+</p>',
        //         trial_duration: 1000,
        //         response_ends_trial: false
        //     };
        //     timeline.push(fixation);

        //     var trial = {
        //         type: 'image-button-response',
        //         stimulus: images
        //         choices: [' ', ' '],
        //         data: values
        //     };
        //     timeline.push(trial);

        // }

        var debrief_block = {
            type: "html-keyboard-response",
            stimulus: function() {
                var responseTimes = jsPsych.data.get().select('rt');
                var userChoice = jsPsych.data.get().select('response');
            return `<p>Press any key to complete the experiment. Thank you!</p>`
            }
            };
        timeline.push(debrief_block);
        