/************************************ 
 * Implicitinfinitysc-Slowtask Test *
 ************************************/


// store info about the experiment session:
let expName = 'ImplicitInfinitySC-SLOWTASK';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(MouseRoutineBegin());
flowScheduler.add(MouseRoutineEachFrame());
flowScheduler.add(MouseRoutineEnd());
const SlowInstrLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SlowInstrLoopLoopBegin(SlowInstrLoopLoopScheduler));
flowScheduler.add(SlowInstrLoopLoopScheduler);
flowScheduler.add(SlowInstrLoopLoopEnd);
const slowpracticeloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(slowpracticeloopLoopBegin(slowpracticeloopLoopScheduler));
flowScheduler.add(slowpracticeloopLoopScheduler);
flowScheduler.add(slowpracticeloopLoopEnd);
flowScheduler.add(PracticeEndRoutineBegin());
flowScheduler.add(PracticeEndRoutineEachFrame());
flowScheduler.add(PracticeEndRoutineEnd());
const SlowLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SlowLoopLoopBegin(SlowLoopLoopScheduler));
flowScheduler.add(SlowLoopLoopScheduler);
flowScheduler.add(SlowLoopLoopEnd);
flowScheduler.add(EndStudyRoutineBegin());
flowScheduler.add(EndStudyRoutineEachFrame());
flowScheduler.add(EndStudyRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'SlowInstructionsSheet2.xlsx', 'path': 'SlowInstructionsSheet2.xlsx'},
    {'name': 'InfinityThesisPracticeStimuli.xlsx', 'path': 'InfinityThesisPracticeStimuli.xlsx'},
    {'name': 'InfinityThesisStimuli.xlsx', 'path': 'InfinityThesisStimuli.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var MouseClock;
var SlowInstrClock;
var SlowInstrText;
var SlowInstrKey;
var slowpracClock;
var fixcross1;
var PracticeText_2;
var key_resp_5;
var FTrue;
var JFALSE;
var SlowTonePrac;
var AdvanceClock;
var text;
var key_resp_4;
var PracticeEndClock;
var PracticeEndText;
var key_resp_3;
var SlowTrialClock;
var polygon;
var SlowText;
var SlowKey;
var myCount;
var ftrue;
var jfalse;
var SlowTone;
var EncouragementClock;
var encouragetext;
var encouragekey;
var EndStudyClock;
var EndStudyText;
var endstudykey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Mouse"
  MouseClock = new util.Clock();
  psychoJS.window.mouseVisible = true;
  
  // Initialize components for Routine "SlowInstr"
  SlowInstrClock = new util.Clock();
  SlowInstrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'SlowInstrText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  SlowInstrKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "slowprac"
  slowpracClock = new util.Clock();
  fixcross1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixcross1', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  PracticeText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'PracticeText_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  FTrue = new visual.TextStim({
    win: psychoJS.window,
    name: 'FTrue',
    text: 'TRUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), 0.3], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  JFALSE = new visual.TextStim({
    win: psychoJS.window,
    name: 'JFALSE',
    text: 'FALSE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.3], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  SlowTonePrac = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 0.2,
    });
  SlowTonePrac.setVolume(1.0);
  // Initialize components for Routine "Advance"
  AdvanceClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Press Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PracticeEnd"
  PracticeEndClock = new util.Clock();
  PracticeEndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'PracticeEndText',
    text: 'You have finished the trial period. You will now complete the official task. Please take your time and judge the following statements to the best of your ability.\n\nPress ‘F’ if the statement is true and ‘J’ if the statement is false. \n\nPress SPACE to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SlowTrial"
  SlowTrialClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  SlowText = new visual.TextStim({
    win: psychoJS.window,
    name: 'SlowText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  SlowKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  myCount = 0;
  
  ftrue = new visual.TextStim({
    win: psychoJS.window,
    name: 'ftrue',
    text: 'TRUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), 0.3], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  jfalse = new visual.TextStim({
    win: psychoJS.window,
    name: 'jfalse',
    text: 'FALSE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.3], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  SlowTone = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 0.2,
    });
  SlowTone.setVolume(1.0);
  // Initialize components for Routine "Encouragement"
  EncouragementClock = new util.Clock();
  encouragetext = new visual.TextStim({
    win: psychoJS.window,
    name: 'encouragetext',
    text: 'Woah-oh! You’re Halfway There! \nKeep It Up! \n\nPress Space to Continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  encouragekey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EndStudy"
  EndStudyClock = new util.Clock();
  EndStudyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndStudyText',
    text: 'Thank you for completing this study! \n\nPlease remember the following completion code to enter into TurkPrime (you may want to write it down): \n\nDOG123\n\nDO NOT EXIT PAGE UNTIL YOU SEE MESSAGE:\n“Thank you for your patience” \nOnce this message appears, press okay and return to TurkPrime\nPress SPACE to complete study',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  endstudykey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var MouseComponents;
function MouseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Mouse'-------
    t = 0;
    MouseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    MouseComponents = [];
    
    MouseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MouseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Mouse'-------
    // get current time
    t = MouseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    MouseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MouseRoutineEnd() {
  return async function () {
    //------Ending Routine 'Mouse'-------
    MouseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.window.mouseVisible = false;
    
    // the Routine "Mouse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SlowInstrLoop;
var currentLoop;
function SlowInstrLoopLoopBegin(SlowInstrLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SlowInstrLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SlowInstructionsSheet2.xlsx',
      seed: undefined, name: 'SlowInstrLoop'
    });
    psychoJS.experiment.addLoop(SlowInstrLoop); // add the loop to the experiment
    currentLoop = SlowInstrLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SlowInstrLoop.forEach(function() {
      const snapshot = SlowInstrLoop.getSnapshot();
    
      SlowInstrLoopLoopScheduler.add(importConditions(snapshot));
      SlowInstrLoopLoopScheduler.add(SlowInstrRoutineBegin(snapshot));
      SlowInstrLoopLoopScheduler.add(SlowInstrRoutineEachFrame());
      SlowInstrLoopLoopScheduler.add(SlowInstrRoutineEnd());
      SlowInstrLoopLoopScheduler.add(endLoopIteration(SlowInstrLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function SlowInstrLoopLoopEnd() {
  psychoJS.experiment.removeLoop(SlowInstrLoop);

  return Scheduler.Event.NEXT;
}


var slowpracticeloop;
function slowpracticeloopLoopBegin(slowpracticeloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    slowpracticeloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'InfinityThesisPracticeStimuli.xlsx',
      seed: undefined, name: 'slowpracticeloop'
    });
    psychoJS.experiment.addLoop(slowpracticeloop); // add the loop to the experiment
    currentLoop = slowpracticeloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    slowpracticeloop.forEach(function() {
      const snapshot = slowpracticeloop.getSnapshot();
    
      slowpracticeloopLoopScheduler.add(importConditions(snapshot));
      slowpracticeloopLoopScheduler.add(slowpracRoutineBegin(snapshot));
      slowpracticeloopLoopScheduler.add(slowpracRoutineEachFrame());
      slowpracticeloopLoopScheduler.add(slowpracRoutineEnd());
      slowpracticeloopLoopScheduler.add(AdvanceRoutineBegin(snapshot));
      slowpracticeloopLoopScheduler.add(AdvanceRoutineEachFrame());
      slowpracticeloopLoopScheduler.add(AdvanceRoutineEnd());
      slowpracticeloopLoopScheduler.add(endLoopIteration(slowpracticeloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function slowpracticeloopLoopEnd() {
  psychoJS.experiment.removeLoop(slowpracticeloop);

  return Scheduler.Event.NEXT;
}


var SlowLoop;
function SlowLoopLoopBegin(SlowLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SlowLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'InfinityThesisStimuli.xlsx',
      seed: undefined, name: 'SlowLoop'
    });
    psychoJS.experiment.addLoop(SlowLoop); // add the loop to the experiment
    currentLoop = SlowLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SlowLoop.forEach(function() {
      const snapshot = SlowLoop.getSnapshot();
    
      SlowLoopLoopScheduler.add(importConditions(snapshot));
      SlowLoopLoopScheduler.add(SlowTrialRoutineBegin(snapshot));
      SlowLoopLoopScheduler.add(SlowTrialRoutineEachFrame());
      SlowLoopLoopScheduler.add(SlowTrialRoutineEnd());
      SlowLoopLoopScheduler.add(EncouragementRoutineBegin(snapshot));
      SlowLoopLoopScheduler.add(EncouragementRoutineEachFrame());
      SlowLoopLoopScheduler.add(EncouragementRoutineEnd());
      SlowLoopLoopScheduler.add(AdvanceRoutineBegin(snapshot));
      SlowLoopLoopScheduler.add(AdvanceRoutineEachFrame());
      SlowLoopLoopScheduler.add(AdvanceRoutineEnd());
      SlowLoopLoopScheduler.add(endLoopIteration(SlowLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function SlowLoopLoopEnd() {
  psychoJS.experiment.removeLoop(SlowLoop);

  return Scheduler.Event.NEXT;
}


var _SlowInstrKey_allKeys;
var SlowInstrComponents;
function SlowInstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'SlowInstr'-------
    t = 0;
    SlowInstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(31.000000);
    // update component parameters for each repeat
    SlowInstrText.setText(SlowInstructions);
    SlowInstrKey.keys = undefined;
    SlowInstrKey.rt = undefined;
    _SlowInstrKey_allKeys = [];
    // keep track of which components have finished
    SlowInstrComponents = [];
    SlowInstrComponents.push(SlowInstrText);
    SlowInstrComponents.push(SlowInstrKey);
    
    SlowInstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function SlowInstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'SlowInstr'-------
    // get current time
    t = SlowInstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SlowInstrText* updates
    if (t >= 0.0 && SlowInstrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowInstrText.tStart = t;  // (not accounting for frame time here)
      SlowInstrText.frameNStart = frameN;  // exact frame index
      
      SlowInstrText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowInstrText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SlowInstrText.setAutoDraw(false);
    }
    
    // *SlowInstrKey* updates
    if (t >= 1 && SlowInstrKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowInstrKey.tStart = t;  // (not accounting for frame time here)
      SlowInstrKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SlowInstrKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SlowInstrKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SlowInstrKey.clearEvents(); });
    }

    frameRemains = 1 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowInstrKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SlowInstrKey.status = PsychoJS.Status.FINISHED;
  }

    if (SlowInstrKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = SlowInstrKey.getKeys({keyList: ['space'], waitRelease: false});
      _SlowInstrKey_allKeys = _SlowInstrKey_allKeys.concat(theseKeys);
      if (_SlowInstrKey_allKeys.length > 0) {
        SlowInstrKey.keys = _SlowInstrKey_allKeys[_SlowInstrKey_allKeys.length - 1].name;  // just the last key pressed
        SlowInstrKey.rt = _SlowInstrKey_allKeys[_SlowInstrKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SlowInstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SlowInstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'SlowInstr'-------
    SlowInstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SlowInstrKey.keys', SlowInstrKey.keys);
    if (typeof SlowInstrKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SlowInstrKey.rt', SlowInstrKey.rt);
        routineTimer.reset();
        }
    
    SlowInstrKey.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var slowpracComponents;
function slowpracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'slowprac'-------
    t = 0;
    slowpracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(11.000000);
    // update component parameters for each repeat
    PracticeText_2.setText(practicetext);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    SlowTonePrac.secs=0.2;
    SlowTonePrac.setVolume(1.0);
    // keep track of which components have finished
    slowpracComponents = [];
    slowpracComponents.push(fixcross1);
    slowpracComponents.push(PracticeText_2);
    slowpracComponents.push(key_resp_5);
    slowpracComponents.push(FTrue);
    slowpracComponents.push(JFALSE);
    slowpracComponents.push(SlowTonePrac);
    
    slowpracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function slowpracRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'slowprac'-------
    // get current time
    t = slowpracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixcross1* updates
    if (t >= 0.0 && fixcross1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixcross1.tStart = t;  // (not accounting for frame time here)
      fixcross1.frameNStart = frameN;  // exact frame index
      
      fixcross1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixcross1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixcross1.setAutoDraw(false);
    }
    
    // *PracticeText_2* updates
    if (t >= 1 && PracticeText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PracticeText_2.tStart = t;  // (not accounting for frame time here)
      PracticeText_2.frameNStart = frameN;  // exact frame index
      
      PracticeText_2.setAutoDraw(true);
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (PracticeText_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      PracticeText_2.setAutoDraw(false);
    }
    
    // *key_resp_5* updates
    if (t >= 1 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_5.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_5.keys == practicecorrect) {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *FTrue* updates
    if (t >= 1 && FTrue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FTrue.tStart = t;  // (not accounting for frame time here)
      FTrue.frameNStart = frameN;  // exact frame index
      
      FTrue.setAutoDraw(true);
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FTrue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FTrue.setAutoDraw(false);
    }
    
    // *JFALSE* updates
    if (t >= 1 && JFALSE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      JFALSE.tStart = t;  // (not accounting for frame time here)
      JFALSE.frameNStart = frameN;  // exact frame index
      
      JFALSE.setAutoDraw(true);
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (JFALSE.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      JFALSE.setAutoDraw(false);
    }
    // start/stop SlowTonePrac
    if (t >= 7 && SlowTonePrac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowTonePrac.tStart = t;  // (not accounting for frame time here)
      SlowTonePrac.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ SlowTonePrac.play(); });  // screen flip
      SlowTonePrac.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 7 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowTonePrac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (0.2 > 0.5) {
        SlowTonePrac.stop();  // stop the sound (if longer than duration)
      }
      SlowTonePrac.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    slowpracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slowpracRoutineEnd() {
  return async function () {
    //------Ending Routine 'slowprac'-------
    slowpracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes(practicecorrect)) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    SlowTonePrac.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var AdvanceComponents;
function AdvanceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Advance'-------
    t = 0;
    AdvanceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    AdvanceComponents = [];
    AdvanceComponents.push(text);
    AdvanceComponents.push(key_resp_4);
    
    AdvanceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AdvanceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Advance'-------
    // get current time
    t = AdvanceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_4.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AdvanceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AdvanceRoutineEnd() {
  return async function () {
    //------Ending Routine 'Advance'-------
    AdvanceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var PracticeEndComponents;
function PracticeEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PracticeEnd'-------
    t = 0;
    PracticeEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    PracticeEndComponents = [];
    PracticeEndComponents.push(PracticeEndText);
    PracticeEndComponents.push(key_resp_3);
    
    PracticeEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PracticeEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PracticeEnd'-------
    // get current time
    t = PracticeEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PracticeEndText* updates
    if (t >= 0.0 && PracticeEndText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PracticeEndText.tStart = t;  // (not accounting for frame time here)
      PracticeEndText.frameNStart = frameN;  // exact frame index
      
      PracticeEndText.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'PracticeEnd'-------
    PracticeEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "PracticeEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _SlowKey_allKeys;
var SlowTrialComponents;
function SlowTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'SlowTrial'-------
    t = 0;
    SlowTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(11.000000);
    // update component parameters for each repeat
    SlowText.setText(Statement);
    SlowKey.keys = undefined;
    SlowKey.rt = undefined;
    _SlowKey_allKeys = [];
    myCount = (myCount + 1);
    if ((myCount > 80)) {
        SlowLoop.finished = true;
    }
    
    SlowTone.secs=0.2;
    SlowTone.setVolume(1.0);
    // keep track of which components have finished
    SlowTrialComponents = [];
    SlowTrialComponents.push(polygon);
    SlowTrialComponents.push(SlowText);
    SlowTrialComponents.push(SlowKey);
    SlowTrialComponents.push(ftrue);
    SlowTrialComponents.push(jfalse);
    SlowTrialComponents.push(SlowTone);
    
    SlowTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SlowTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'SlowTrial'-------
    // get current time
    t = SlowTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // *SlowText* updates
    if (t >= 1 && SlowText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowText.tStart = t;  // (not accounting for frame time here)
      SlowText.frameNStart = frameN;  // exact frame index
      
      SlowText.setAutoDraw(true);
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SlowText.setAutoDraw(false);
    }
    
    // *SlowKey* updates
    if (t >= 1.0 && SlowKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowKey.tStart = t;  // (not accounting for frame time here)
      SlowKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SlowKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SlowKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SlowKey.clearEvents(); });
    }

    frameRemains = 1.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SlowKey.status = PsychoJS.Status.FINISHED;
  }

    if (SlowKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = SlowKey.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _SlowKey_allKeys = _SlowKey_allKeys.concat(theseKeys);
      if (_SlowKey_allKeys.length > 0) {
        SlowKey.keys = _SlowKey_allKeys[_SlowKey_allKeys.length - 1].name;  // just the last key pressed
        SlowKey.rt = _SlowKey_allKeys[_SlowKey_allKeys.length - 1].rt;
        // was this correct?
        if (SlowKey.keys == Correct) {
            SlowKey.corr = 1;
        } else {
            SlowKey.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ftrue* updates
    if (t >= 1 && ftrue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ftrue.tStart = t;  // (not accounting for frame time here)
      ftrue.frameNStart = frameN;  // exact frame index
      
      ftrue.setAutoDraw(true);
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ftrue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ftrue.setAutoDraw(false);
    }
    
    // *jfalse* updates
    if (t >= 1 && jfalse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      jfalse.tStart = t;  // (not accounting for frame time here)
      jfalse.frameNStart = frameN;  // exact frame index
      
      jfalse.setAutoDraw(true);
    }

    frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (jfalse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      jfalse.setAutoDraw(false);
    }
    // start/stop SlowTone
    if (t >= 7 && SlowTone.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowTone.tStart = t;  // (not accounting for frame time here)
      SlowTone.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ SlowTone.play(); });  // screen flip
      SlowTone.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 7 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowTone.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (0.2 > 0.5) {
        SlowTone.stop();  // stop the sound (if longer than duration)
      }
      SlowTone.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SlowTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SlowTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'SlowTrial'-------
    SlowTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (SlowKey.keys === undefined) {
      if (['None','none',undefined].includes(Correct)) {
         SlowKey.corr = 1;  // correct non-response
      } else {
         SlowKey.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('SlowKey.keys', SlowKey.keys);
    psychoJS.experiment.addData('SlowKey.corr', SlowKey.corr);
    if (typeof SlowKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SlowKey.rt', SlowKey.rt);
        routineTimer.reset();
        }
    
    SlowKey.stop();
    SlowTone.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}


var _encouragekey_allKeys;
var EncouragementComponents;
function EncouragementRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Encouragement'-------
    t = 0;
    EncouragementClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    encouragekey.keys = undefined;
    encouragekey.rt = undefined;
    _encouragekey_allKeys = [];
    // keep track of which components have finished
    EncouragementComponents = [];
    EncouragementComponents.push(encouragetext);
    EncouragementComponents.push(encouragekey);
    
    EncouragementComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EncouragementRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Encouragement'-------
    // get current time
    t = EncouragementClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *encouragetext* updates
    if (t >= 0.0 && encouragetext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      encouragetext.tStart = t;  // (not accounting for frame time here)
      encouragetext.frameNStart = frameN;  // exact frame index
      
      encouragetext.setAutoDraw(true);
    }

    
    // *encouragekey* updates
    if (t >= 3 && encouragekey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      encouragekey.tStart = t;  // (not accounting for frame time here)
      encouragekey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { encouragekey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { encouragekey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { encouragekey.clearEvents(); });
    }

    if (encouragekey.status === PsychoJS.Status.STARTED) {
      let theseKeys = encouragekey.getKeys({keyList: ['space'], waitRelease: false});
      _encouragekey_allKeys = _encouragekey_allKeys.concat(theseKeys);
      if (_encouragekey_allKeys.length > 0) {
        encouragekey.keys = _encouragekey_allKeys[_encouragekey_allKeys.length - 1].name;  // just the last key pressed
        encouragekey.rt = _encouragekey_allKeys[_encouragekey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((SlowLoop.thisN !== 40)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EncouragementComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EncouragementRoutineEnd() {
  return async function () {
    //------Ending Routine 'Encouragement'-------
    EncouragementComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('encouragekey.keys', encouragekey.keys);
    if (typeof encouragekey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('encouragekey.rt', encouragekey.rt);
        routineTimer.reset();
        }
    
    encouragekey.stop();
    // the Routine "Encouragement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _endstudykey_allKeys;
var EndStudyComponents;
function EndStudyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'EndStudy'-------
    t = 0;
    EndStudyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    endstudykey.keys = undefined;
    endstudykey.rt = undefined;
    _endstudykey_allKeys = [];
    // keep track of which components have finished
    EndStudyComponents = [];
    EndStudyComponents.push(EndStudyText);
    EndStudyComponents.push(endstudykey);
    
    EndStudyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndStudyRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'EndStudy'-------
    // get current time
    t = EndStudyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EndStudyText* updates
    if (t >= 0.0 && EndStudyText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EndStudyText.tStart = t;  // (not accounting for frame time here)
      EndStudyText.frameNStart = frameN;  // exact frame index
      
      EndStudyText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (EndStudyText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      EndStudyText.setAutoDraw(false);
    }
    
    // *endstudykey* updates
    if (t >= 3 && endstudykey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endstudykey.tStart = t;  // (not accounting for frame time here)
      endstudykey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endstudykey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endstudykey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endstudykey.clearEvents(); });
    }

    frameRemains = 30  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((endstudykey.status === PsychoJS.Status.STARTED || endstudykey.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      endstudykey.status = PsychoJS.Status.FINISHED;
  }

    if (endstudykey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endstudykey.getKeys({keyList: ['space'], waitRelease: false});
      _endstudykey_allKeys = _endstudykey_allKeys.concat(theseKeys);
      if (_endstudykey_allKeys.length > 0) {
        endstudykey.keys = _endstudykey_allKeys[_endstudykey_allKeys.length - 1].name;  // just the last key pressed
        endstudykey.rt = _endstudykey_allKeys[_endstudykey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndStudyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndStudyRoutineEnd() {
  return async function () {
    //------Ending Routine 'EndStudy'-------
    EndStudyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('endstudykey.keys', endstudykey.keys);
    if (typeof endstudykey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endstudykey.rt', endstudykey.rt);
        routineTimer.reset();
        }
    
    endstudykey.stop();
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
