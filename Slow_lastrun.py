#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Thu Feb 17 11:09:34 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Slow'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/sophiecb/Desktop/Slow/Slow_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "sinstr"
sinstrClock = core.Clock()
SlowInstrText = visual.TextStim(win=win, name='SlowInstrText',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
SlowInstrKey = keyboard.Keyboard()

# Initialize components for Routine "spract"
spractClock = core.Clock()
fixcross1 = visual.ShapeStim(
    win=win, name='fixcross1', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)
PracticeText = visual.TextStim(win=win, name='PracticeText',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()
FTrue = visual.TextStim(win=win, name='FTrue',
    text='F=TRUE',
    font='Open Sans',
    pos=(-.5, .3), height=0.06, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
JFALSE = visual.TextStim(win=win, name='JFALSE',
    text='J=FALSE',
    font='Open Sans',
    pos=(.5,.3), height=0.06, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
sinstloop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('SlowInstructionsSheet2.xlsx'),
    seed=None, name='sinstloop')
thisExp.addLoop(sinstloop)  # add the loop to the experiment
thisSinstloop = sinstloop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSinstloop.rgb)
if thisSinstloop != None:
    for paramName in thisSinstloop:
        exec('{} = thisSinstloop[paramName]'.format(paramName))

for thisSinstloop in sinstloop:
    currentLoop = sinstloop
    # abbreviate parameter names if possible (e.g. rgb = thisSinstloop.rgb)
    if thisSinstloop != None:
        for paramName in thisSinstloop:
            exec('{} = thisSinstloop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "sinstr"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    SlowInstrText.setText(SlowInstructions)
    SlowInstrKey.keys = []
    SlowInstrKey.rt = []
    _SlowInstrKey_allKeys = []
    # keep track of which components have finished
    sinstrComponents = [SlowInstrText, SlowInstrKey]
    for thisComponent in sinstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    sinstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "sinstr"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = sinstrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=sinstrClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *SlowInstrText* updates
        if SlowInstrText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            SlowInstrText.frameNStart = frameN  # exact frame index
            SlowInstrText.tStart = t  # local t and not account for scr refresh
            SlowInstrText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SlowInstrText, 'tStartRefresh')  # time at next scr refresh
            SlowInstrText.setAutoDraw(True)
        if SlowInstrText.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > SlowInstrText.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                SlowInstrText.tStop = t  # not accounting for scr refresh
                SlowInstrText.frameNStop = frameN  # exact frame index
                win.timeOnFlip(SlowInstrText, 'tStopRefresh')  # time at next scr refresh
                SlowInstrText.setAutoDraw(False)
        
        # *SlowInstrKey* updates
        waitOnFlip = False
        if SlowInstrKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            SlowInstrKey.frameNStart = frameN  # exact frame index
            SlowInstrKey.tStart = t  # local t and not account for scr refresh
            SlowInstrKey.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SlowInstrKey, 'tStartRefresh')  # time at next scr refresh
            SlowInstrKey.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(SlowInstrKey.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(SlowInstrKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if SlowInstrKey.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > SlowInstrKey.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                SlowInstrKey.tStop = t  # not accounting for scr refresh
                SlowInstrKey.frameNStop = frameN  # exact frame index
                win.timeOnFlip(SlowInstrKey, 'tStopRefresh')  # time at next scr refresh
                SlowInstrKey.status = FINISHED
        if SlowInstrKey.status == STARTED and not waitOnFlip:
            theseKeys = SlowInstrKey.getKeys(keyList=['f'], waitRelease=False)
            _SlowInstrKey_allKeys.extend(theseKeys)
            if len(_SlowInstrKey_allKeys):
                SlowInstrKey.keys = _SlowInstrKey_allKeys[-1].name  # just the last key pressed
                SlowInstrKey.rt = _SlowInstrKey_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in sinstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "sinstr"-------
    for thisComponent in sinstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sinstloop.addData('SlowInstrText.started', SlowInstrText.tStartRefresh)
    sinstloop.addData('SlowInstrText.stopped', SlowInstrText.tStopRefresh)
    # check responses
    if SlowInstrKey.keys in ['', [], None]:  # No response was made
        SlowInstrKey.keys = None
    sinstloop.addData('SlowInstrKey.keys',SlowInstrKey.keys)
    if SlowInstrKey.keys != None:  # we had a response
        sinstloop.addData('SlowInstrKey.rt', SlowInstrKey.rt)
    sinstloop.addData('SlowInstrKey.started', SlowInstrKey.tStartRefresh)
    sinstloop.addData('SlowInstrKey.stopped', SlowInstrKey.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'sinstloop'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('InfinityThesisPracticeStimuli.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "spract"-------
    continueRoutine = True
    # update component parameters for each repeat
    PracticeText.setText(practicetext)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    spractComponents = [fixcross1, PracticeText, key_resp_2, FTrue, JFALSE]
    for thisComponent in spractComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    spractClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "spract"-------
    while continueRoutine:
        # get current time
        t = spractClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=spractClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixcross1* updates
        if fixcross1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixcross1.frameNStart = frameN  # exact frame index
            fixcross1.tStart = t  # local t and not account for scr refresh
            fixcross1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixcross1, 'tStartRefresh')  # time at next scr refresh
            fixcross1.setAutoDraw(True)
        if fixcross1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixcross1.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixcross1.tStop = t  # not accounting for scr refresh
                fixcross1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixcross1, 'tStopRefresh')  # time at next scr refresh
                fixcross1.setAutoDraw(False)
        
        # *PracticeText* updates
        if PracticeText.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            PracticeText.frameNStart = frameN  # exact frame index
            PracticeText.tStart = t  # local t and not account for scr refresh
            PracticeText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(PracticeText, 'tStartRefresh')  # time at next scr refresh
            PracticeText.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['f', 'j'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # was this correct?
                if (key_resp_2.keys == str(practicecorrect)) or (key_resp_2.keys == practicecorrect):
                    key_resp_2.corr = 1
                else:
                    key_resp_2.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *FTrue* updates
        if FTrue.status == NOT_STARTED and tThisFlip >= 0.05-frameTolerance:
            # keep track of start time/frame for later
            FTrue.frameNStart = frameN  # exact frame index
            FTrue.tStart = t  # local t and not account for scr refresh
            FTrue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FTrue, 'tStartRefresh')  # time at next scr refresh
            FTrue.setAutoDraw(True)
        
        # *JFALSE* updates
        if JFALSE.status == NOT_STARTED and tThisFlip >= 0.05-frameTolerance:
            # keep track of start time/frame for later
            JFALSE.frameNStart = frameN  # exact frame index
            JFALSE.tStart = t  # local t and not account for scr refresh
            JFALSE.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(JFALSE, 'tStartRefresh')  # time at next scr refresh
            JFALSE.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in spractComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "spract"-------
    for thisComponent in spractComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixcross1.started', fixcross1.tStartRefresh)
    trials.addData('fixcross1.stopped', fixcross1.tStopRefresh)
    trials.addData('PracticeText.started', PracticeText.tStartRefresh)
    trials.addData('PracticeText.stopped', PracticeText.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
        # was no response the correct answer?!
        if str(practicecorrect).lower() == 'none':
           key_resp_2.corr = 1;  # correct non-response
        else:
           key_resp_2.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('key_resp_2.keys',key_resp_2.keys)
    trials.addData('key_resp_2.corr', key_resp_2.corr)
    if key_resp_2.keys != None:  # we had a response
        trials.addData('key_resp_2.rt', key_resp_2.rt)
    trials.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    trials.addData('JFALSE.started', JFALSE.tStartRefresh)
    trials.addData('JFALSE.stopped', JFALSE.tStopRefresh)
    # the Routine "spract" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
