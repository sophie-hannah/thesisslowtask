﻿/******************************* 
 * Infinitythesistestfast Test *
 *******************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'InfinityThesisTestFAST';  // from the Builder filename that created this script
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
flowScheduler.add(MouseRoutineBegin());
flowScheduler.add(MouseRoutineEachFrame());
flowScheduler.add(MouseRoutineEnd());
const InstrloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(InstrloopLoopBegin(InstrloopLoopScheduler));
flowScheduler.add(InstrloopLoopScheduler);
flowScheduler.add(InstrloopLoopEnd);
const FastLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(FastLoopLoopBegin(FastLoopLoopScheduler));
flowScheduler.add(FastLoopLoopScheduler);
flowScheduler.add(FastLoopLoopEnd);
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
    {'name': 'SpeededInstructionsSheet.xlsx', 'path': 'SpeededInstructionsSheet.xlsx'},
    {'name': 'InfinityThesisTest5.xlsx', 'path': 'InfinityThesisTest5.xlsx'}
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
var FastInstrClock;
var Instr1;
var InstrResponse;
var FastTrialClock;
var fixcross;
var Fasttext;
var key_resp;
var Timer;
var EndStudyClock;
var EndStudyText;
var endstudykey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Mouse"
  MouseClock = new util.Clock();
  psychoJS.window.mouseVisible = true;
  
  // Initialize components for Routine "FastInstr"
  FastInstrClock = new util.Clock();
  Instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instr1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  InstrResponse = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "FastTrial"
  FastTrialClock = new util.Clock();
  fixcross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixcross', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  Fasttext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Fasttext',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Timer = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 0.2,
    });
  Timer.setVolume(1.0);
  // Initialize components for Routine "EndStudy"
  EndStudyClock = new util.Clock();
  EndStudyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndStudyText',
    text: 'Thank you for completing this study',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
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
    
    for (const thisComponent of MouseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of MouseComponents)
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


function MouseRoutineEnd() {
  return async function () {
    //------Ending Routine 'Mouse'-------
    for (const thisComponent of MouseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.mouseVisible = false;
    
    // the Routine "Mouse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instrloop;
var currentLoop;
function InstrloopLoopBegin(InstrloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Instrloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SpeededInstructionsSheet.xlsx',
      seed: undefined, name: 'Instrloop'
    });
    psychoJS.experiment.addLoop(Instrloop); // add the loop to the experiment
    currentLoop = Instrloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrloop of Instrloop) {
      const snapshot = Instrloop.getSnapshot();
      InstrloopLoopScheduler.add(importConditions(snapshot));
      InstrloopLoopScheduler.add(FastInstrRoutineBegin(snapshot));
      InstrloopLoopScheduler.add(FastInstrRoutineEachFrame());
      InstrloopLoopScheduler.add(FastInstrRoutineEnd());
      InstrloopLoopScheduler.add(endLoopIteration(InstrloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function InstrloopLoopEnd() {
  psychoJS.experiment.removeLoop(Instrloop);

  return Scheduler.Event.NEXT;
}


var FastLoop;
function FastLoopLoopBegin(FastLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    FastLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'InfinityThesisTest5.xlsx',
      seed: undefined, name: 'FastLoop'
    });
    psychoJS.experiment.addLoop(FastLoop); // add the loop to the experiment
    currentLoop = FastLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFastLoop of FastLoop) {
      const snapshot = FastLoop.getSnapshot();
      FastLoopLoopScheduler.add(importConditions(snapshot));
      FastLoopLoopScheduler.add(FastTrialRoutineBegin(snapshot));
      FastLoopLoopScheduler.add(FastTrialRoutineEachFrame());
      FastLoopLoopScheduler.add(FastTrialRoutineEnd());
      FastLoopLoopScheduler.add(endLoopIteration(FastLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function FastLoopLoopEnd() {
  psychoJS.experiment.removeLoop(FastLoop);

  return Scheduler.Event.NEXT;
}


var _InstrResponse_allKeys;
var FastInstrComponents;
function FastInstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'FastInstr'-------
    t = 0;
    FastInstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    Instr1.setText(FastInstructions);
    InstrResponse.keys = undefined;
    InstrResponse.rt = undefined;
    _InstrResponse_allKeys = [];
    // keep track of which components have finished
    FastInstrComponents = [];
    FastInstrComponents.push(Instr1);
    FastInstrComponents.push(InstrResponse);
    
    for (const thisComponent of FastInstrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FastInstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'FastInstr'-------
    // get current time
    t = FastInstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instr1* updates
    if (t >= 0.0 && Instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instr1.tStart = t;  // (not accounting for frame time here)
      Instr1.frameNStart = frameN;  // exact frame index
      
      Instr1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Instr1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Instr1.setAutoDraw(false);
    }
    
    // *InstrResponse* updates
    if (t >= 2 && InstrResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrResponse.tStart = t;  // (not accounting for frame time here)
      InstrResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrResponse.clearEvents(); });
    }

    frameRemains = 2 + 28 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (InstrResponse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      InstrResponse.status = PsychoJS.Status.FINISHED;
  }

    if (InstrResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrResponse.getKeys({keyList: ['e'], waitRelease: false});
      _InstrResponse_allKeys = _InstrResponse_allKeys.concat(theseKeys);
      if (_InstrResponse_allKeys.length > 0) {
        InstrResponse.keys = _InstrResponse_allKeys[_InstrResponse_allKeys.length - 1].name;  // just the last key pressed
        InstrResponse.rt = _InstrResponse_allKeys[_InstrResponse_allKeys.length - 1].rt;
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
    for (const thisComponent of FastInstrComponents)
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


function FastInstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'FastInstr'-------
    for (const thisComponent of FastInstrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('InstrResponse.keys', InstrResponse.keys);
    if (typeof InstrResponse.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('InstrResponse.rt', InstrResponse.rt);
        routineTimer.reset();
        }
    
    InstrResponse.stop();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var FastTrialComponents;
function FastTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'FastTrial'-------
    t = 0;
    FastTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    Fasttext.setText(Statement);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    Timer.secs=0.2;
    Timer.setVolume(1.0);
    // keep track of which components have finished
    FastTrialComponents = [];
    FastTrialComponents.push(fixcross);
    FastTrialComponents.push(Fasttext);
    FastTrialComponents.push(key_resp);
    FastTrialComponents.push(Timer);
    
    for (const thisComponent of FastTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FastTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'FastTrial'-------
    // get current time
    t = FastTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixcross* updates
    if (t >= 0.0 && fixcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixcross.tStart = t;  // (not accounting for frame time here)
      fixcross.frameNStart = frameN;  // exact frame index
      
      fixcross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixcross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixcross.setAutoDraw(false);
    }
    
    // *Fasttext* updates
    if (t >= 0.5 && Fasttext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fasttext.tStart = t;  // (not accounting for frame time here)
      Fasttext.frameNStart = frameN;  // exact frame index
      
      Fasttext.setAutoDraw(true);
    }

    frameRemains = 5.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Fasttext.status === PsychoJS.Status.STARTED || Fasttext.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Fasttext.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.5 + 5.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['e', 'i'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == Correct) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // start/stop Timer
    if (t >= 3.5 && Timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Timer.tStart = t;  // (not accounting for frame time here)
      Timer.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ Timer.play(); });  // screen flip
      Timer.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 3.5 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (0.2 > 0.5) {
        Timer.stop();  // stop the sound (if longer than duration)
      }
      Timer.status = PsychoJS.Status.FINISHED;
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
    for (const thisComponent of FastTrialComponents)
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


function FastTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'FastTrial'-------
    for (const thisComponent of FastTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(Correct)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    Timer.stop();  // ensure sound has stopped at end of routine
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
    // update component parameters for each repeat
    endstudykey.keys = undefined;
    endstudykey.rt = undefined;
    _endstudykey_allKeys = [];
    // keep track of which components have finished
    EndStudyComponents = [];
    EndStudyComponents.push(EndStudyText);
    EndStudyComponents.push(endstudykey);
    
    for (const thisComponent of EndStudyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    if (t >= 0.0 && endstudykey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endstudykey.tStart = t;  // (not accounting for frame time here)
      endstudykey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endstudykey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endstudykey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endstudykey.clearEvents(); });
    }

    if (endstudykey.status === PsychoJS.Status.STARTED) {
      let theseKeys = endstudykey.getKeys({keyList: ['e'], waitRelease: false});
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
    for (const thisComponent of EndStudyComponents)
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


function EndStudyRoutineEnd() {
  return async function () {
    //------Ending Routine 'EndStudy'-------
    for (const thisComponent of EndStudyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('endstudykey.keys', endstudykey.keys);
    if (typeof endstudykey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('endstudykey.rt', endstudykey.rt);
        routineTimer.reset();
        }
    
    endstudykey.stop();
    // the Routine "EndStudy" was not non-slip safe, so reset the non-slip timer
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
