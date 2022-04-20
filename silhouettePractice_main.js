var timeline = [];
//var repo_site = "https://joviec.github.io/silhouetteChoice/img/";
//var condition = Qualtrics.SurveyEngine.getEmbeddedData('condition');
var condition = "baseline";

var pic_list = [
 
 {
   "name": "finalPicsFemaleG3Age6P1MaleG4Age13P2MaleG6Age77P2MaleG5Age35P1.png"
 },
 {
   "name": "finalPicsMaleG2Age3P2FemaleG5Age23P2FemaleG4Age13P2MaleG1Age1.3P2.png"
 },
 {
   "name": "finalPicsMaleG1Age1P1FemaleG3Age10P1MaleG5Age28P1MaleG2Age2P1.png"
 },
 {
   "name": "finalPicsFemaleG5Age26P2MaleG3Age8P1MaleG6Age95P1P1.png"
 },
 {
   "name": "finalPicsMaleG3Age11P2MaleG2Age2P2MaleG4Age12P2FemaleG6Age66P2.png"
 }
]


var picture = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 0; i < pic_list.length; i++) {
  var source = "https://joviec.github.io/silhouetteChoice/img/" + pic_list[i].name;
  picture.push(source);
}


var preload_pic = {
      type:'preload',
      auto_preload:true,
      images: picture,
      show_detailed_errors: true,
      max_load_time: 1000000
  };

timeline.push(preload_pic);

var stimuli = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 0; i < picture.length; i++) {
  var imgsrc = "<img src=\"" + picture[i] + "\"/>";
  stimuli.push(imgsrc);
}


var welcome = {
            type: "html-keyboard-response",
            stimulus: "You will start the choice task now. Please press any key to proceed."
        };

timeline.push(welcome);


// if (condition == "baseline") {

//                 var instruction = {
//                     type: 'html-keyboard-response',
//                     stimulus: 'Please press any key to proceed.'
//                     //trial_duration: 2000,
//                     //choices: jsPsych.NO_KEYS,
//                     //response_ends_trial: false
//                 };
//                 timeline.push(instruction);
//               }


// var baselineInstr = {
//     type: 'instructions',
//     pages: [
//     `We are interested in your opinions about saving different human lives. 
//     \nThere are situations when resources are limited and not all human lives can be saved. 
//     \nImagine you are the captain of a ship. One day, a storm hits your ship and it is sinking. 
//     \n However, not enough lifeboats are available, so you can only save some of your passengers. 
//     \n\n Please press any key to proceed.`,
//     'This is the second page of instructions.',
//     'This is the final page.'
//     ],
//     show_clickable_nav: true
// }
// timeline.push(baselineInstr);



//var shuffleTrials = jsPsych.randomization.repeat(picture,1);

for (var values of stimuli) {
  var fixation = {
      type: 'html-button-response',
      stimulus: ' ',
      choices:['+'],
      //trial_duration: 500,
      response_ends_trial: true
  };
  timeline.push(fixation);

  var trial = {
      type: 'html-button-response',
      stimulus: values,
      //stimulus: '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>',
      choices: [' ',' ',' ',' '],
      button_html: ['<button class="jspsych-btn" style = "position:relative; left:-135px; top: -400px">%choice%</button>',//upper left
                    '<button class="jspsych-btn" style = "position:relative; right:-200px; top: -400px">%choice%</button>', //upper right 
                    '<button class="jspsych-btn" style = "position:relative; left:160px; top: -80px">%choice%</button>', //lower right
                    '<button class="jspsych-btn" style = "position:relative; right:255px; top: -80px">%choice%</button>'] //lower left
      //prompt: "<p> hello </p>"
  };
  timeline.push(trial);
  };
              

// var trials_with_variables1 = {
//     timeline: [fixation, trial],
//     timeline_variables: pic_list//.slice(0,STIM_N/2)
//     };

// timeline.push(trials_with_variables1);

var debrief_block = {
            type: "html-keyboard-response",
            stimulus: function() {
                //var responseTimes = jsPsych.data.get().select('rt');
                //var userChoice = jsPsych.data.get().select('response');
            return `<p>Press any key to complete the experiment. Thank you!</p>`;
            }
            };
        timeline.push(debrief_block);
