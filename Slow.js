/************* 
 * Slow Test *
 *************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Slow';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
const sinstloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sinstloopLoopBegin(sinstloopLoopScheduler));
flowScheduler.add(sinstloopLoopScheduler);
flowScheduler.add(sinstloopLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'SlowInstructionsSheet2.xlsx', 'path': 'SlowInstructionsSheet2.xlsx'},
    {'name': 'InfinityThesisPracticeStimuli.xlsx', 'path': 'InfinityThesisPracticeStimuli.xlsx'}
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


var sinstrClock;
var SlowInstrText;
var SlowInstrKey;
var spractClock;
var fixcross1;
var PracticeText;
var key_resp_2;
var FTrue;
var JFALSE;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "sinstr"
  sinstrClock = new util.Clock();
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
  
  // Initialize components for Routine "spract"
  spractClock = new util.Clock();
  fixcross1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixcross1', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  PracticeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'PracticeText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  FTrue = new visual.TextStim({
    win: psychoJS.window,
    name: 'FTrue',
    text: 'F=TRUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), 0.3], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  JFALSE = new visual.TextStim({
    win: psychoJS.window,
    name: 'JFALSE',
    text: 'J=FALSE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0.3], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var sinstloop;
var currentLoop;
function sinstloopLoopBegin(sinstloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sinstloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SlowInstructionsSheet2.xlsx',
      seed: undefined, name: 'sinstloop'
    });
    psychoJS.experiment.addLoop(sinstloop); // add the loop to the experiment
    currentLoop = sinstloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSinstloop of sinstloop) {
      const snapshot = sinstloop.getSnapshot();
      sinstloopLoopScheduler.add(importConditions(snapshot));
      sinstloopLoopScheduler.add(sinstrRoutineBegin(snapshot));
      sinstloopLoopScheduler.add(sinstrRoutineEachFrame());
      sinstloopLoopScheduler.add(sinstrRoutineEnd());
      sinstloopLoopScheduler.add(endLoopIteration(sinstloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function sinstloopLoopEnd() {
  psychoJS.experiment.removeLoop(sinstloop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'InfinityThesisPracticeStimuli.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(spractRoutineBegin(snapshot));
      trialsLoopScheduler.add(spractRoutineEachFrame());
      trialsLoopScheduler.add(spractRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _SlowInstrKey_allKeys;
var sinstrComponents;
function sinstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'sinstr'-------
    t = 0;
    sinstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    SlowInstrText.setText(SlowInstructions);
    SlowInstrKey.keys = undefined;
    SlowInstrKey.rt = undefined;
    _SlowInstrKey_allKeys = [];
    // keep track of which components have finished
    sinstrComponents = [];
    sinstrComponents.push(SlowInstrText);
    sinstrComponents.push(SlowInstrKey);
    
    for (const thisComponent of sinstrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function sinstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'sinstr'-------
    // get current time
    t = sinstrClock.getTime();
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
    if (t >= 0.0 && SlowInstrKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowInstrKey.tStart = t;  // (not accounting for frame time here)
      SlowInstrKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SlowInstrKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SlowInstrKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SlowInstrKey.clearEvents(); });
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (SlowInstrKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SlowInstrKey.status = PsychoJS.Status.FINISHED;
  }

    if (SlowInstrKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = SlowInstrKey.getKeys({keyList: ['f'], waitRelease: false});
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
    for (const thisComponent of sinstrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sinstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'sinstr'-------
    for (const thisComponent of sinstrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SlowInstrKey.keys', SlowInstrKey.keys);
    if (typeof SlowInstrKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SlowInstrKey.rt', SlowInstrKey.rt);
        routineTimer.reset();
        }
    
    SlowInstrKey.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var spractComponents;
function spractRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'spract'-------
    t = 0;
    spractClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    PracticeText.setText(practicetext);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    spractComponents = [];
    spractComponents.push(fixcross1);
    spractComponents.push(PracticeText);
    spractComponents.push(key_resp_2);
    spractComponents.push(FTrue);
    spractComponents.push(JFALSE);
    
    for (const thisComponent of spractComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function spractRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'spract'-------
    // get current time
    t = spractClock.getTime();
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
    
    // *PracticeText* updates
    if (t >= 1 && PracticeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PracticeText.tStart = t;  // (not accounting for frame time here)
      PracticeText.frameNStart = frameN;  // exact frame index
      
      PracticeText.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 1 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_2.keys == practicecorrect) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *FTrue* updates
    if (t >= 0.05 && FTrue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FTrue.tStart = t;  // (not accounting for frame time here)
      FTrue.frameNStart = frameN;  // exact frame index
      
      FTrue.setAutoDraw(true);
    }

    
    // *JFALSE* updates
    if (t >= 0.05 && JFALSE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      JFALSE.tStart = t;  // (not accounting for frame time here)
      JFALSE.frameNStart = frameN;  // exact frame index
      
      JFALSE.setAutoDraw(true);
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
    for (const thisComponent of spractComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function spractRoutineEnd() {
  return async function () {
    //------Ending Routine 'spract'-------
    for (const thisComponent of spractComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(practicecorrect)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "spract" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
