// create a list of all images so we can tell jsPsych to
// preload them for speed (see jsPsych.init below)
var people = ["https://joviec.github.io/silhouetteTask/img/"];



// this example uses fewer durations (just to make the number
// of trials sensible).
var factors = {
    image: people
    stimulus_duration: 6000,
    fixation_duration: 500
};

var factorial_values = jsPsych.randomization.factorial(factors);

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '+',
    trial_duration: jsPsych.timelineVariable('fixation_duration'),
    response_ends_trial: false
};

// add all of the relevant variables to the data field so they
// will appear in the results
var trial = {
    type: 'html-keyboard-response',
    prompt: '<p>Press a key!</p>',
    stimulus: function () {
        // note: the outer parentheses are only here so we can break the line
        return (
           '<img src="'+jsPsych.timelineVariable("image", true)+'">'
        );
    },
    stimulus_duration: jsPsych.timelineVariable('stimulus_duration'),
    data: {
      fixation_duration: jsPsych.timelineVariable('fixation_duration'),
      stimulus_duration: jsPsych.timelineVariable('stimulus_duration'),
      image: jsPsych.timelineVariable('image'),

    }
};

var trials_with_variables = {
    timeline: [fixation, trial],
    timeline_variables: factorial_values
};

// add a list of all images, these will be loaded right at the start
// to avoid delays
jsPsych.init({
    timeline: [trials_with_variables],
    on_finish: function() {
        jsPsych.data.displayData('csv');
    },
    preload_images: people
});




        /* create timeline */
        var timeline = [];

        /* choice task data by trial */
        var image = [1:240];
        var images = image.map(x => "https://joviec.github.io/silhouetteTask/img/");

        var preload = {
             type: 'preload',
             images: images
        }

        timeline.push(preload);

        // jsPsych.init({
        //     timeline: [preload]
        // })


        /* randomize trials */
        // var shuffleTrials = jsPsych.randomization.repeat(images,1);

        
        var welcome = {
            type: "html-keyboard-response",
            stimulus: "You will start the choice task now. Please press any key to proceed."
        };
        timeline.push(welcome);
        

        // var factors = {
        //     image1: images,
        //     fixation_duration: 500
        // };



        var shuffleTrials = jsPsych.randomization.repeat(images,1);

            // create an empty html string
    // var html = '';

    for (var values of shuffleTrials) {
                var fixation = {
                    type: 'html-keyboard-response',
                    stimulus: '+',
                    choices: jsPsych.NO_KEYS,
                    trial_duration: 500,
                    response_ends_trial: false
                };
                timeline.push(fixation);

                var trial = {
                    type: 'html-button-response',
                    stimulus: function () {
                    return (           
                    '<img src="https://joviec.github.io/silhouetteTask/img/'+jsPsych.timelineVariable("values", true)+'">'
                    //stimulus:  '<img src="https://joviec.github.io/silhouetteTask/img/finalPics FemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>',
                    choices: ['1', '2', '3', '4'],
                    data: values
                };

                timeline.push(trial);
                }


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
