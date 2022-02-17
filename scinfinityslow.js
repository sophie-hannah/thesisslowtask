/*********************** 
 * Scinfinityslow Test *
 ***********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'scinfinityslow';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
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
const InstloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(InstloopLoopBegin(InstloopLoopScheduler));
flowScheduler.add(InstloopLoopScheduler);
flowScheduler.add(InstloopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'SlowInstructionsSheet2.xlsx', 'path': 'SlowInstructionsSheet2.xlsx'}
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


var SlowInstClock;
var Instr1;
var InstrResponse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "SlowInst"
  SlowInstClock = new util.Clock();
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
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var Instloop;
var currentLoop;
function InstloopLoopBegin(InstloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Instloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: '/Users/sophiecb/Desktop/Thesis/ThesisTestSlow/SlowInstructionsSheet2.xlsx',
      seed: undefined, name: 'Instloop'
    });
    psychoJS.experiment.addLoop(Instloop); // add the loop to the experiment
    currentLoop = Instloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstloop of Instloop) {
      const snapshot = Instloop.getSnapshot();
      InstloopLoopScheduler.add(importConditions(snapshot));
      InstloopLoopScheduler.add(SlowInstRoutineBegin(snapshot));
      InstloopLoopScheduler.add(SlowInstRoutineEachFrame());
      InstloopLoopScheduler.add(SlowInstRoutineEnd());
      InstloopLoopScheduler.add(endLoopIteration(InstloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function InstloopLoopEnd() {
  psychoJS.experiment.removeLoop(Instloop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _InstrResponse_allKeys;
var SlowInstComponents;
function SlowInstRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'SlowInst'-------
    t = 0;
    SlowInstClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    Instr1.setText(SlowInstructions);
    InstrResponse.keys = undefined;
    InstrResponse.rt = undefined;
    _InstrResponse_allKeys = [];
    // keep track of which components have finished
    SlowInstComponents = [];
    SlowInstComponents.push(Instr1);
    SlowInstComponents.push(InstrResponse);
    
    for (const thisComponent of SlowInstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function SlowInstRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'SlowInst'-------
    // get current time
    t = SlowInstClock.getTime();
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
    if (t >= 0 && InstrResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstrResponse.tStart = t;  // (not accounting for frame time here)
      InstrResponse.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstrResponse.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstrResponse.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstrResponse.clearEvents(); });
    }

    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (InstrResponse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      InstrResponse.status = PsychoJS.Status.FINISHED;
  }

    if (InstrResponse.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstrResponse.getKeys({keyList: ['f'], waitRelease: false});
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
    for (const thisComponent of SlowInstComponents)
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


function SlowInstRoutineEnd() {
  return async function () {
    //------Ending Routine 'SlowInst'-------
    for (const thisComponent of SlowInstComponents) {
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
