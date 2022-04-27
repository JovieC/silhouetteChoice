var timeline = [];
//var repo_site = "https://joviec.github.io/silhouetteChoice/img/";
//var condition = Qualtrics.SurveyEngine.getEmbeddedData('condition');
var condition = "general";

var practice_list = [
 {
   "name": "finalPicsFemaleG1Age1.2P2FemaleG6Age88P1MaleG3Age5P1MaleG5Age24P2.png"
 },
 {
   "name": "finalPicsFemaleG1Age0.3P1FemaleG6Age66P1MaleG3Age5P1MaleG2Age2P2.png"
 },
 {
   "name": "finalPicsFemaleG3Age11P2FemaleG2Age4P2MaleG4Age14P1FemaleG5Age29P2.png"
 },
 {
   "name": "finalPicsFemaleG5Age21P2MaleG4Age14P1MaleG1Age0.1P2MaleG3Age5P2.png"
 },
 {
   "name": "finalPicsFemaleG5Age26P1FemaleG6Age72P2MaleG3Age8P2FemaleG1Age1.4P2.png"
 },
 ]


var pic_list = [
 {
   "name": "finalPicsMaleG6Age74P2FemaleG2Age4P2FemaleG1Age1.1P2MaleG5Age29P1.png"
 },
{
  "name": "finalPicsMaleG3Age11P2MaleG2Age2P2MaleG4Age12P2FemaleG6Age66P2.png"
},
 {
   "name": "finalPicsMaleG6Age70P1FemaleG3Age7P2MaleG2Age3P1P1.png"
 },
 {
   "name": "finalPicsMaleG6AgenaP0FemaleG6AgenaP0.png"
 },
 {
   "name": "finalPicsMaleG3AgenaP0FemaleG3AgenaP0.png"
 },
 {
   "name": "finalPicsMaleG2AgenaP0FemaleG2AgenaP0.png"
 },
 {
   "name": "finalPicsFemaleG5AgenaP0MaleG5AgenaP0.png"
 },
 {
   "name": "finalPicsFemaleG4AgenaP0MaleG4AgenaP0.png"
 },
 {
   "name": "finalPicsFemaleG1AgenaP0MaleG1AgenaP0.png"
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
      message: 'Please wait while the files load...',
      max_load_time: 1000000
  };

timeline.push(preload_pic);

//var practiceTrialNum = new Array(1, 2, 3, 4, 5);
var practice = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 200; i < 206; i++) {
  var practicesrc = "<img src=\"" + picture[i] + "\"/>";
  practice.push(practicesrc);
}


var foursilhouettes = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = 0; i < picture.length-6; i++) {
  var imgsrc = "<img src=\"" + picture[i] + "\"/>";
  foursilhouettes.push(imgsrc);
}

var twosilhouettes = [];
//var picture = '<img src="https://joviec.github.io/silhouetteChoice/img/finalPicsFemaleG1Age0.1P2FemaleG5Age21P1MaleG3Age8P1MaleG2Age3P2.png"/>'
for (i = picture.length-6; i < picture.length; i++) {
  var gendersrc = "<img src=\"" + picture[i] + "\"/>";
  twosilhouettes.push(gendersrc);
}



var welcome = {
    type: 'instructions',
    pages: [`You will start the choice task now. 
    <br><br>Please click "Next", read the task instructions carefully and make decisions accordingly.`],
    show_clickable_nav: true
        };

timeline.push(welcome);

if(condition == "baseline"){
var intro = {
    type: 'instructions',
    pages: [
    `We are interested in your opinions about <b>saving</b> different human lives. 
    <br>There are situations when resources are limited and not all human lives can be <b>saved<b>. 
    <br>Imagine you are the captain of a ship. One day, a storm hits your ship and it is sinking. 
    <br>However, not enough lifeboats are available, so you can only <b>save</b> some of your passengers. 
    <br><br>Please click "Next" to proceed.`,
    `In this task, you will see many groups of human lives presented as silhouettes. 
    <br>The number on each silhouette indicates the age of that person and the hairstyle indicates their gender.
    <br>In each group, please choose one so that person will <b>get on the lifeboat and be saved</b>. 
    <br>At the beginning of every trial, you will see a white box with a black fixation cross in the center of the screen.
    <br>Please click it to proceed to the next screen.
    <br>After the black cross disappears, silhouettes will show up. 
    <br>To make a choice, click on the white box on the silhouette you wish to <b>save</b>. 
    <br>Then, the fixation cross will show up again and please click it to proceed.
    <br><br>Please click "Next" to proceed`,
    `You will do some practice now.
    <br><br>Please click "Next" to proceed.`
    ],
    show_clickable_nav: true
};
} else if (condition == "general") {
var intro = {
  type: 'instructions',
  pages: [`We are interested in <b>policy-making</b> about saving different human lives. 
  <br>There are situations when resources are limited and not all human lives can be saved. 
  <br>For example, in case a storm hits a ship and it is sinking, yet not enough lifeboats are available,
  a <b>policy</b> that determines which passengers to save is needed. 
  <br><br>Please press "Next" to proceed.`, 
  `In this task, you will see many groups of human lives presented as silhouettes. 
  <br>The number on each silhouette indicates the age of that person and the hairstyle indicates their gender.
  <br>In each group, please choose one so that person will <b>always</b> be saved in cases of resource shortage.
  <br>At the beginning of every trial, you will see a white box with a black fixation cross in the center of the screen.
  <br>Please click it to proceed to the next screen.
  <br>After the black cross disappears, silhouettes will show up. 
  <br>To make a choice, click on the white box on the silhouette the <b>policy</b> should prioritize. 
  <br>Then, the fixation cross will show up again and please click it to proceed.
  <br><br>Please click "Next" to proceed`,
  `You will do some practice now.
  <br><br>Please click "Next" to proceed.`
  ],
  show_clickable_nav: true
};
} else if (condition == "negative") {
  var intro = {
    type: 'instructions',
    pages: [`We are interested in your opinions about <b>giving up</b> different human lives. 
    <br>There are situations when resources are limited and some human lives have to be <b>left to die</b>. 
    <br>Imagine you are the captain of a ship. One day, a storm hits your ship and it is sinking. 
    <br>However, not enough lifeboats are available, so you have to <b>let some of your passengers die</b>. 
    <br><br>Please click "Next" to proceed.`,
    `In this task, you will see many groups of human lives presented as silhouettes. 
    <br>The number on each silhouette indicates the age of that person and the hairstyle indicates their gender.
    <br>In each group, please choose one so that person will be <b>left to die</b>. 
    <br>At the beginning of every trial, you will see a white box with a black fixation cross in the center of the screen.
    <br>Please click it to proceed to the next screen.
    <br>After the black cross disappears, silhouettes will show up. 
    <br>To make a choice, click on the white box on the silhouette you wish to <b>give up</b>. 
    <br>Then, the fixation cross will show up again and please click it to proceed.
    <br><br>Please click "Next" to proceed`,
    `You will do some practice now.
    <br><br>Please click "Next" to proceed.`],
    show_clickable_nav: true
  }
}
timeline.push(intro);

for (var practiceValues of practice) {
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
      stimulus: practiceValues,
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


var finishedPractice = {
  type: 'instructions',
  pages: ['You have finished the practice, now you will proceed to the formal experiment with the same task. <br>Please click <Next> to proceed.'
  ],
  show_clickable_nav: true
};

timeline.push(finishedPractice);

if(condition == "baseline"){
  var conditionInst = {
    type: 'instructions',
    pages: [`Imagine you are the captain of a ship. One day, a storm hits your ship, and it is sinking. However, not enough lifeboats are available. 
    <br>Only about one fourth of the passengers can get on a lifeboat and be saved, and you have to decide who will get on.
    <br>Keep in mind that these are <b>your personal decisions, so please follow your heart<b>. 
    <br><br>Please click "Next" to start.`],
    show_clickable_nav: true
  };
} else if (condition == "general"){
  var conditionInst = {
    type: 'instructions',
    pages: [`Imagine you are making a <b>policy<b> to determine which human lives to save in cases of resource shortage.
    <br>Only about one fourth of the lives can be saved.
    <br>Keep in mind that your answers serve as <b>criteria for policies and those you choose to save will always be prioritized in future cases of resource shortage<b>. 
    <br><br>Please click "Next" to start.`],
    show_clickable_nav: true
  };
} else if (condition == "negative") {
  var conditionInst = {
    type: 'instructions',
    pages: [`Imagine you are the captain of a ship. One day, a storm hits your ship, and it is sinking. However, not enough lifeboats are available. 
    <br>About one fourth of the passengers can <b>not<b> get on a lifeboat, and you have to decide who to <b>let die<b>.
    <br>Keep in mind that these are your personal decisions, so please follow your heart. 
    <br><br>Please click "Next" to start.`],
    show_clickable_nav: true
  }
}
timeline.push(conditionInst)


for (var values of foursilhouettes) {

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

  if (condition == "baseline") {
    var genderChoice = {
    type: 'instructions',
    pages: ['Now you will see a few groups of human lives that are the same age but differ in gender.<br>Please left click on the one you wish to <b>save<b>. <br>Please click "Next" to continue.'],
    show_clickable_nav: true
    };
  } else if (condition == "negative") {
    var genderChoice = {
     type: 'instructions',
     pages: ['Now you will see a few groups of human lives that are the same age but differ in gender.<br>Please left click on the one you wish to <b>give up<b>. <br>Please click "Next" to continue.'], 
     show_clickable_nav: true
    };
  } else if (condition == "general") {
    var genderChoice = {
    type: 'instructions',
    pages: ['Now you will see a few groups of human lives that are the same age but differ in gender.<br>Please left click on the life the <b>policy should save<b>. <br>Please click "Next" to continue.'],
    show_clickable_nav: true
    };
  };

timeline.push(genderChoice);


  for (var valuesNew of twosilhouettes) {

  timeline.push(fixation);

  var genderTrial = {
      type: 'html-button-response',
      stimulus: valuesNew,
      choices: [' ',' '],
      button_html: ['<button class="jspsych-btn" style = "position:relative; left:-140px; top: -200px">%choice%</button>',//upper left
                    '<button class="jspsych-btn" style = "position:relative; right:-140px; top: -200px">%choice%</button>',] //upper right 
      //prompt: "<p> hello </p>"
  };
  timeline.push(genderTrial);
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
