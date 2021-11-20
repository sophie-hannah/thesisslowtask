/*************************** 
 * Infinitythesistest Test *
 ***************************/


// store info about the experiment session:
let expName = 'InfinityThesisTest';  // from the Builder filename that created this script
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
const BlockselectloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlockselectloopLoopBegin(BlockselectloopLoopScheduler));
flowScheduler.add(BlockselectloopLoopScheduler);
flowScheduler.add(BlockselectloopLoopEnd);
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
    {'name': 'SlowInstructionsSheet2.xlsx', 'path': 'SlowInstructionsSheet2.xlsx'},
    {'name': 'InfinityThesisTest5.xlsx', 'path': 'InfinityThesisTest5.xlsx'},
    {'name': 'BlockSelectLoop.xlsx', 'path': 'BlockSelectLoop.xlsx'}
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


var BlockSelectClock;
var nRepsblock1;
var nRepsblock2;
var FastInstrClock;
var Instr1;
var InstrResponse;
var FastTrialClock;
var fixcross;
var Fasttext;
var key_resp;
var Timer;
var SlowInstrClock;
var SlowInstrText;
var SlowInstrKey;
var SlowTrialClock;
var polygon;
var SlowText;
var SlowKey;
var EndStudyClock;
var EndStudyText;
var endstudykey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "BlockSelect"
  BlockSelectClock = new util.Clock();
  nRepsblock1 = 0;
  nRepsblock2 = 0;
  
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


var Blockselectloop;
var currentLoop;
function BlockselectloopLoopBegin(BlockselectloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Blockselectloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'BlockSelectLoop.xlsx',
      seed: undefined, name: 'Blockselectloop'
    });
    psychoJS.experiment.addLoop(Blockselectloop); // add the loop to the experiment
    currentLoop = Blockselectloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Blockselectloop.forEach(function() {
      const snapshot = Blockselectloop.getSnapshot();
    
      BlockselectloopLoopScheduler.add(importConditions(snapshot));
      BlockselectloopLoopScheduler.add(BlockSelectRoutineBegin(snapshot));
      BlockselectloopLoopScheduler.add(BlockSelectRoutineEachFrame());
      BlockselectloopLoopScheduler.add(BlockSelectRoutineEnd());
      const SpeededBlockLoopScheduler = new Scheduler(psychoJS);
      BlockselectloopLoopScheduler.add(SpeededBlockLoopBegin(SpeededBlockLoopScheduler, snapshot));
      BlockselectloopLoopScheduler.add(SpeededBlockLoopScheduler);
      BlockselectloopLoopScheduler.add(SpeededBlockLoopEnd);
      const SlowBlockLoopScheduler = new Scheduler(psychoJS);
      BlockselectloopLoopScheduler.add(SlowBlockLoopBegin(SlowBlockLoopScheduler, snapshot));
      BlockselectloopLoopScheduler.add(SlowBlockLoopScheduler);
      BlockselectloopLoopScheduler.add(SlowBlockLoopEnd);
      BlockselectloopLoopScheduler.add(endLoopIteration(BlockselectloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var SpeededBlock;
function SpeededBlockLoopBegin(SpeededBlockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SpeededBlock = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nRepsblock1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'SpeededBlock'
    });
    psychoJS.experiment.addLoop(SpeededBlock); // add the loop to the experiment
    currentLoop = SpeededBlock;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SpeededBlock.forEach(function() {
      const snapshot = SpeededBlock.getSnapshot();
    
      SpeededBlockLoopScheduler.add(importConditions(snapshot));
      const InstrloopLoopScheduler = new Scheduler(psychoJS);
      SpeededBlockLoopScheduler.add(InstrloopLoopBegin(InstrloopLoopScheduler, snapshot));
      SpeededBlockLoopScheduler.add(InstrloopLoopScheduler);
      SpeededBlockLoopScheduler.add(InstrloopLoopEnd);
      const FastLoopLoopScheduler = new Scheduler(psychoJS);
      SpeededBlockLoopScheduler.add(FastLoopLoopBegin(FastLoopLoopScheduler, snapshot));
      SpeededBlockLoopScheduler.add(FastLoopLoopScheduler);
      SpeededBlockLoopScheduler.add(FastLoopLoopEnd);
      SpeededBlockLoopScheduler.add(endLoopIteration(SpeededBlockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var Instrloop;
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
    Instrloop.forEach(function() {
      const snapshot = Instrloop.getSnapshot();
    
      InstrloopLoopScheduler.add(importConditions(snapshot));
      InstrloopLoopScheduler.add(FastInstrRoutineBegin(snapshot));
      InstrloopLoopScheduler.add(FastInstrRoutineEachFrame());
      InstrloopLoopScheduler.add(FastInstrRoutineEnd());
      InstrloopLoopScheduler.add(endLoopIteration(InstrloopLoopScheduler, snapshot));
    });
    
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
    FastLoop.forEach(function() {
      const snapshot = FastLoop.getSnapshot();
    
      FastLoopLoopScheduler.add(importConditions(snapshot));
      FastLoopLoopScheduler.add(FastTrialRoutineBegin(snapshot));
      FastLoopLoopScheduler.add(FastTrialRoutineEachFrame());
      FastLoopLoopScheduler.add(FastTrialRoutineEnd());
      FastLoopLoopScheduler.add(endLoopIteration(FastLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function FastLoopLoopEnd() {
  psychoJS.experiment.removeLoop(FastLoop);

  return Scheduler.Event.NEXT;
}


async function SpeededBlockLoopEnd() {
  psychoJS.experiment.removeLoop(SpeededBlock);

  return Scheduler.Event.NEXT;
}


var SlowBlock;
function SlowBlockLoopBegin(SlowBlockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SlowBlock = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nRepsblock2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'SlowBlock'
    });
    psychoJS.experiment.addLoop(SlowBlock); // add the loop to the experiment
    currentLoop = SlowBlock;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SlowBlock.forEach(function() {
      const snapshot = SlowBlock.getSnapshot();
    
      SlowBlockLoopScheduler.add(importConditions(snapshot));
      const SlowInstrLoopLoopScheduler = new Scheduler(psychoJS);
      SlowBlockLoopScheduler.add(SlowInstrLoopLoopBegin(SlowInstrLoopLoopScheduler, snapshot));
      SlowBlockLoopScheduler.add(SlowInstrLoopLoopScheduler);
      SlowBlockLoopScheduler.add(SlowInstrLoopLoopEnd);
      const SlowLoopLoopScheduler = new Scheduler(psychoJS);
      SlowBlockLoopScheduler.add(SlowLoopLoopBegin(SlowLoopLoopScheduler, snapshot));
      SlowBlockLoopScheduler.add(SlowLoopLoopScheduler);
      SlowBlockLoopScheduler.add(SlowLoopLoopEnd);
      SlowBlockLoopScheduler.add(endLoopIteration(SlowBlockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var SlowInstrLoop;
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


var SlowLoop;
function SlowLoopLoopBegin(SlowLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SlowLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'InfinityThesisTest5.xlsx',
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
      SlowLoopLoopScheduler.add(endLoopIteration(SlowLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function SlowLoopLoopEnd() {
  psychoJS.experiment.removeLoop(SlowLoop);

  return Scheduler.Event.NEXT;
}


async function SlowBlockLoopEnd() {
  psychoJS.experiment.removeLoop(SlowBlock);

  return Scheduler.Event.NEXT;
}


async function BlockselectloopLoopEnd() {
  psychoJS.experiment.removeLoop(Blockselectloop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var BlockSelectComponents;
function BlockSelectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'BlockSelect'-------
    t = 0;
    BlockSelectClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((selectBlock === 1)) {
        nRepsblock1 = 1;
        nRepsblock2 = 0;
    } else {
        if ((selectBlock === 2)) {
            nRepsblock1 = 0;
            nRepsblock2 = 1;
        }
    }
    
    // keep track of which components have finished
    BlockSelectComponents = [];
    
    BlockSelectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BlockSelectRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'BlockSelect'-------
    // get current time
    t = BlockSelectClock.getTime();
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
    BlockSelectComponents.forEach( function(thisComponent) {
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


function BlockSelectRoutineEnd() {
  return async function () {
    //------Ending Routine 'BlockSelect'-------
    BlockSelectComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "BlockSelect" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
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
    
    FastInstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    FastInstrComponents.forEach( function(thisComponent) {
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


function FastInstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'FastInstr'-------
    FastInstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    FastTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    FastTrialComponents.forEach( function(thisComponent) {
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


function FastTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'FastTrial'-------
    FastTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    routineTimer.add(30.000000);
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
      let theseKeys = SlowInstrKey.getKeys({keyList: ['e'], waitRelease: false});
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
    // update component parameters for each repeat
    SlowText.setText(Statement);
    SlowKey.keys = undefined;
    SlowKey.rt = undefined;
    _SlowKey_allKeys = [];
    // keep track of which components have finished
    SlowTrialComponents = [];
    SlowTrialComponents.push(polygon);
    SlowTrialComponents.push(SlowText);
    SlowTrialComponents.push(SlowKey);
    
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
    if (t >= 0.5 && SlowText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowText.tStart = t;  // (not accounting for frame time here)
      SlowText.frameNStart = frameN;  // exact frame index
      
      SlowText.setAutoDraw(true);
    }

    
    // *SlowKey* updates
    if (t >= 0.0 && SlowKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SlowKey.tStart = t;  // (not accounting for frame time here)
      SlowKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SlowKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SlowKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SlowKey.clearEvents(); });
    }

    if (SlowKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = SlowKey.getKeys({keyList: ['e', 'i'], waitRelease: false});
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
    if (continueRoutine) {
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
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('SlowKey.keys', SlowKey.keys);
    psychoJS.experiment.addData('SlowKey.corr', SlowKey.corr);
    if (typeof SlowKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SlowKey.rt', SlowKey.rt);
        routineTimer.reset();
        }
    
    SlowKey.stop();
    // the Routine "SlowTrial" was not non-slip safe, so reset the non-slip timer
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
    EndStudyComponents.forEach( function(thisComponent) {
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
