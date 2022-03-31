var timeline = [];

var pic = pic_list.map(i => "https://joviec.github.io/silhouetteTask/img/"+ i.name);

var preload = {
     type:'preload',
     auto_preload:true,
     images: pic
 };

timeline.push(preload);

var welcome = {
            type: "html-keyboard-response",
            stimulus: "You will start the choice task now. Please press any key to proceed."
        };

timeline.push(welcome);

//var shuffleTrials = jsPsych.randomization.repeat(pic,1);
//console.log(shuffleTrials[1]);

//for (var values of shuffleTrials) {
                var fixation = {
                    type: 'html-keyboard-response',
                    stimulus: '+',
                    choices: jsPsych.NO_KEYS,
                    trial_duration: 500,
                    response_ends_trial: false
                };
                //timeline.push(fixation);

                var trial = {
                    type: 'html-button-response',
                    stimulus: function () {
                        return (
                            '<div class="issue"><img src="https://joviec.github.io/silhouetteTask/img/'+jsPsych.timelineVariable("name", true)
                            );
                        },
                    choices: ['1', '2', '3', '4'],
                    //data: values
                        
                };

                //timeline.push(trial);
                //}

            var trials_with_variables1 = {
                timeline: [fixation, trial],
                timeline_variables: stim_list.slice(0,STIM_N/2)
            };

            timeline.push(trials_with_variables1);

var debrief_block = {
            type: "html-keyboard-response",
            stimulus: function() {
                var responseTimes = jsPsych.data.get().select('rt');
                var userChoice = jsPsych.data.get().select('response');
            return `<p>Press any key to complete the experiment. Thank you!</p>`;
            }
            };
        timeline.push(debrief_block);
