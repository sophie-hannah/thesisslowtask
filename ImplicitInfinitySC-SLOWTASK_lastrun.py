#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Tue Feb 22 11:44:34 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('latest')


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
expName = 'slow'  # from the Builder filename that created this script
expInfo = {'participant': ''}
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/sophiecb/Desktop/Thesis/ThesisTestSlow/ImplicitInfinitySC-SLOWTASK_lastrun.py',
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
    monitor='testMonitor', color=[1.0,1.0,1.0], colorSpace='rgb',
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

# Initialize components for Routine "Mouse"
MouseClock = core.Clock()
win.mouseVisible = True

# Initialize components for Routine "SlowInstr"
SlowInstrClock = core.Clock()
SlowInstrText = visual.TextStim(win=win, name='SlowInstrText',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
SlowInstrKey = keyboard.Keyboard()

# Initialize components for Routine "slowprac"
slowpracClock = core.Clock()
fixcross1 = visual.ShapeStim(
    win=win, name='fixcross1', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)
PracticeText_2 = visual.TextStim(win=win, name='PracticeText_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_5 = keyboard.Keyboard()
FTrue = visual.TextStim(win=win, name='FTrue',
    text='TRUE',
    font='Open Sans',
    pos=(-.5, .3), height=0.06, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
JFALSE = visual.TextStim(win=win, name='JFALSE',
    text='FALSE',
    font='Open Sans',
    pos=(.5,.3), height=0.06, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# Initialize components for Routine "Advance"
AdvanceClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Press Space to Continue',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "PracticeEnd"
PracticeEndClock = core.Clock()
PracticeEndText = visual.TextStim(win=win, name='PracticeEndText',
    text='You have finished the trial period. You will now complete the official task. Judge the following statements as quickly as you can without sacrificing accuracy.\n\nPress ‘F’ if the statement is true and ‘J’ if the statement is false. \n\nPress SPACE to continue',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "SlowTrial"
SlowTrialClock = core.Clock()
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',
    size=(0.1, 0.1),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)
SlowText = visual.TextStim(win=win, name='SlowText',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
SlowKey = keyboard.Keyboard()
myCount = 0
ftrue = visual.TextStim(win=win, name='ftrue',
    text='TRUE',
    font='Open Sans',
    pos=(-.5, .3), height=0.06, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
jfalse = visual.TextStim(win=win, name='jfalse',
    text='FALSE',
    font='Open Sans',
    pos=(.5, .3), height=0.06, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "Encouragement"
EncouragementClock = core.Clock()
encouragetext = visual.TextStim(win=win, name='encouragetext',
    text='Woah-oh! You’re Halfway There! \nKeep It Up! \n\nPress Space to Continue',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
encouragekey = keyboard.Keyboard()

# Initialize components for Routine "Advance"
AdvanceClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Press Space to Continue',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "EndStudy"
EndStudyClock = core.Clock()
EndStudyText = visual.TextStim(win=win, name='EndStudyText',
    text='Thank you for completing this study! \n\nPlease remember the following completion code to enter into TurkPrime (you may want to write it down): \n\nDOG123\n\nDO NOT EXIT PAGE UNTIL YOU SEE MESSAGE:\n“Thank you for your patience” \nOnce this message appears, press okay and return to TurkPrime\nPress SPACE to complete study',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
endstudykey = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Mouse"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
MouseComponents = []
for thisComponent in MouseComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
MouseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Mouse"-------
while continueRoutine:
    # get current time
    t = MouseClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=MouseClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in MouseComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Mouse"-------
for thisComponent in MouseComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
win.mouseVisible = False
# the Routine "Mouse" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
SlowInstrLoop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('SlowInstructionsSheet2.xlsx'),
    seed=None, name='SlowInstrLoop')
thisExp.addLoop(SlowInstrLoop)  # add the loop to the experiment
thisSlowInstrLoop = SlowInstrLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSlowInstrLoop.rgb)
if thisSlowInstrLoop != None:
    for paramName in thisSlowInstrLoop:
        exec('{} = thisSlowInstrLoop[paramName]'.format(paramName))

for thisSlowInstrLoop in SlowInstrLoop:
    currentLoop = SlowInstrLoop
    # abbreviate parameter names if possible (e.g. rgb = thisSlowInstrLoop.rgb)
    if thisSlowInstrLoop != None:
        for paramName in thisSlowInstrLoop:
            exec('{} = thisSlowInstrLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "SlowInstr"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    SlowInstrText.setText(SlowInstructions)
    SlowInstrKey.keys = []
    SlowInstrKey.rt = []
    _SlowInstrKey_allKeys = []
    # keep track of which components have finished
    SlowInstrComponents = [SlowInstrText, SlowInstrKey]
    for thisComponent in SlowInstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    SlowInstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "SlowInstr"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = SlowInstrClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=SlowInstrClock)
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
            theseKeys = SlowInstrKey.getKeys(keyList=['space'], waitRelease=False)
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
        for thisComponent in SlowInstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "SlowInstr"-------
    for thisComponent in SlowInstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    SlowInstrLoop.addData('SlowInstrText.started', SlowInstrText.tStartRefresh)
    SlowInstrLoop.addData('SlowInstrText.stopped', SlowInstrText.tStopRefresh)
    # check responses
    if SlowInstrKey.keys in ['', [], None]:  # No response was made
        SlowInstrKey.keys = None
    SlowInstrLoop.addData('SlowInstrKey.keys',SlowInstrKey.keys)
    if SlowInstrKey.keys != None:  # we had a response
        SlowInstrLoop.addData('SlowInstrKey.rt', SlowInstrKey.rt)
    SlowInstrLoop.addData('SlowInstrKey.started', SlowInstrKey.tStartRefresh)
    SlowInstrLoop.addData('SlowInstrKey.stopped', SlowInstrKey.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'SlowInstrLoop'

# get names of stimulus parameters
if SlowInstrLoop.trialList in ([], [None], None):
    params = []
else:
    params = SlowInstrLoop.trialList[0].keys()
# save data for this loop
SlowInstrLoop.saveAsText(filename + 'SlowInstrLoop.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# set up handler to look after randomisation of conditions etc
slowpracticeloop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('InfinityThesisPracticeStimuli.xlsx'),
    seed=None, name='slowpracticeloop')
thisExp.addLoop(slowpracticeloop)  # add the loop to the experiment
thisSlowpracticeloop = slowpracticeloop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSlowpracticeloop.rgb)
if thisSlowpracticeloop != None:
    for paramName in thisSlowpracticeloop:
        exec('{} = thisSlowpracticeloop[paramName]'.format(paramName))

for thisSlowpracticeloop in slowpracticeloop:
    currentLoop = slowpracticeloop
    # abbreviate parameter names if possible (e.g. rgb = thisSlowpracticeloop.rgb)
    if thisSlowpracticeloop != None:
        for paramName in thisSlowpracticeloop:
            exec('{} = thisSlowpracticeloop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "slowprac"-------
    continueRoutine = True
    # update component parameters for each repeat
    PracticeText_2.setText(practicetext)
    key_resp_5.keys = []
    key_resp_5.rt = []
    _key_resp_5_allKeys = []
    # keep track of which components have finished
    slowpracComponents = [fixcross1, PracticeText_2, key_resp_5, FTrue, JFALSE]
    for thisComponent in slowpracComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    slowpracClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "slowprac"-------
    while continueRoutine:
        # get current time
        t = slowpracClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=slowpracClock)
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
        
        # *PracticeText_2* updates
        if PracticeText_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            PracticeText_2.frameNStart = frameN  # exact frame index
            PracticeText_2.tStart = t  # local t and not account for scr refresh
            PracticeText_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(PracticeText_2, 'tStartRefresh')  # time at next scr refresh
            PracticeText_2.setAutoDraw(True)
        
        # *key_resp_5* updates
        waitOnFlip = False
        if key_resp_5.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            key_resp_5.frameNStart = frameN  # exact frame index
            key_resp_5.tStart = t  # local t and not account for scr refresh
            key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
            key_resp_5.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_5.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_5.getKeys(keyList=['f', 'j'], waitRelease=False)
            _key_resp_5_allKeys.extend(theseKeys)
            if len(_key_resp_5_allKeys):
                key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                # was this correct?
                if (key_resp_5.keys == str(practicecorrect)) or (key_resp_5.keys == practicecorrect):
                    key_resp_5.corr = 1
                else:
                    key_resp_5.corr = 0
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
        for thisComponent in slowpracComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "slowprac"-------
    for thisComponent in slowpracComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    slowpracticeloop.addData('fixcross1.started', fixcross1.tStartRefresh)
    slowpracticeloop.addData('fixcross1.stopped', fixcross1.tStopRefresh)
    slowpracticeloop.addData('PracticeText_2.started', PracticeText_2.tStartRefresh)
    slowpracticeloop.addData('PracticeText_2.stopped', PracticeText_2.tStopRefresh)
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys = None
        # was no response the correct answer?!
        if str(practicecorrect).lower() == 'none':
           key_resp_5.corr = 1;  # correct non-response
        else:
           key_resp_5.corr = 0;  # failed to respond (incorrectly)
    # store data for slowpracticeloop (TrialHandler)
    slowpracticeloop.addData('key_resp_5.keys',key_resp_5.keys)
    slowpracticeloop.addData('key_resp_5.corr', key_resp_5.corr)
    if key_resp_5.keys != None:  # we had a response
        slowpracticeloop.addData('key_resp_5.rt', key_resp_5.rt)
    slowpracticeloop.addData('key_resp_5.started', key_resp_5.tStartRefresh)
    slowpracticeloop.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
    slowpracticeloop.addData('JFALSE.started', JFALSE.tStartRefresh)
    slowpracticeloop.addData('JFALSE.stopped', JFALSE.tStopRefresh)
    # the Routine "slowprac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Advance"-------
    continueRoutine = True
    routineTimer.add(10.000000)
    # update component parameters for each repeat
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    AdvanceComponents = [text, key_resp_4]
    for thisComponent in AdvanceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    AdvanceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Advance"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = AdvanceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=AdvanceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                text.setAutoDraw(False)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_4.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_4.tStop = t  # not accounting for scr refresh
                key_resp_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_4, 'tStopRefresh')  # time at next scr refresh
                key_resp_4.status = FINISHED
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in AdvanceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Advance"-------
    for thisComponent in AdvanceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    slowpracticeloop.addData('text.started', text.tStartRefresh)
    slowpracticeloop.addData('text.stopped', text.tStopRefresh)
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    slowpracticeloop.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        slowpracticeloop.addData('key_resp_4.rt', key_resp_4.rt)
    slowpracticeloop.addData('key_resp_4.started', key_resp_4.tStartRefresh)
    slowpracticeloop.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'slowpracticeloop'

# get names of stimulus parameters
if slowpracticeloop.trialList in ([], [None], None):
    params = []
else:
    params = slowpracticeloop.trialList[0].keys()
# save data for this loop
slowpracticeloop.saveAsText(filename + 'slowpracticeloop.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "PracticeEnd"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
PracticeEndComponents = [PracticeEndText, key_resp_3]
for thisComponent in PracticeEndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PracticeEndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "PracticeEnd"-------
while continueRoutine:
    # get current time
    t = PracticeEndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PracticeEndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *PracticeEndText* updates
    if PracticeEndText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        PracticeEndText.frameNStart = frameN  # exact frame index
        PracticeEndText.tStart = t  # local t and not account for scr refresh
        PracticeEndText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(PracticeEndText, 'tStartRefresh')  # time at next scr refresh
        PracticeEndText.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PracticeEndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "PracticeEnd"-------
for thisComponent in PracticeEndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('PracticeEndText.started', PracticeEndText.tStartRefresh)
thisExp.addData('PracticeEndText.stopped', PracticeEndText.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "PracticeEnd" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
SlowLoop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('InfinityThesisStimuli.xlsx'),
    seed=None, name='SlowLoop')
thisExp.addLoop(SlowLoop)  # add the loop to the experiment
thisSlowLoop = SlowLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSlowLoop.rgb)
if thisSlowLoop != None:
    for paramName in thisSlowLoop:
        exec('{} = thisSlowLoop[paramName]'.format(paramName))

for thisSlowLoop in SlowLoop:
    currentLoop = SlowLoop
    # abbreviate parameter names if possible (e.g. rgb = thisSlowLoop.rgb)
    if thisSlowLoop != None:
        for paramName in thisSlowLoop:
            exec('{} = thisSlowLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "SlowTrial"-------
    continueRoutine = True
    # update component parameters for each repeat
    SlowText.setText(Statement)
    SlowKey.keys = []
    SlowKey.rt = []
    _SlowKey_allKeys = []
    myCount = myCount + 1
    if myCount > 80:
        SlowLoop.finished = True
    # keep track of which components have finished
    SlowTrialComponents = [polygon, SlowText, SlowKey, ftrue, jfalse]
    for thisComponent in SlowTrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    SlowTrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "SlowTrial"-------
    while continueRoutine:
        # get current time
        t = SlowTrialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=SlowTrialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon* updates
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            polygon.setAutoDraw(True)
        if polygon.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon.tStartRefresh + 0.4-frameTolerance:
                # keep track of stop time/frame for later
                polygon.tStop = t  # not accounting for scr refresh
                polygon.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                polygon.setAutoDraw(False)
        
        # *SlowText* updates
        if SlowText.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            SlowText.frameNStart = frameN  # exact frame index
            SlowText.tStart = t  # local t and not account for scr refresh
            SlowText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SlowText, 'tStartRefresh')  # time at next scr refresh
            SlowText.setAutoDraw(True)
        
        # *SlowKey* updates
        waitOnFlip = False
        if SlowKey.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            SlowKey.frameNStart = frameN  # exact frame index
            SlowKey.tStart = t  # local t and not account for scr refresh
            SlowKey.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(SlowKey, 'tStartRefresh')  # time at next scr refresh
            SlowKey.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(SlowKey.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(SlowKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if SlowKey.status == STARTED and not waitOnFlip:
            theseKeys = SlowKey.getKeys(keyList=['f', 'j'], waitRelease=False)
            _SlowKey_allKeys.extend(theseKeys)
            if len(_SlowKey_allKeys):
                SlowKey.keys = _SlowKey_allKeys[-1].name  # just the last key pressed
                SlowKey.rt = _SlowKey_allKeys[-1].rt
                # was this correct?
                if (SlowKey.keys == str(Correct)) or (SlowKey.keys == Correct):
                    SlowKey.corr = 1
                else:
                    SlowKey.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # *ftrue* updates
        if ftrue.status == NOT_STARTED and tThisFlip >= 0.05-frameTolerance:
            # keep track of start time/frame for later
            ftrue.frameNStart = frameN  # exact frame index
            ftrue.tStart = t  # local t and not account for scr refresh
            ftrue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ftrue, 'tStartRefresh')  # time at next scr refresh
            ftrue.setAutoDraw(True)
        
        # *jfalse* updates
        if jfalse.status == NOT_STARTED and tThisFlip >= 0.05-frameTolerance:
            # keep track of start time/frame for later
            jfalse.frameNStart = frameN  # exact frame index
            jfalse.tStart = t  # local t and not account for scr refresh
            jfalse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(jfalse, 'tStartRefresh')  # time at next scr refresh
            jfalse.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in SlowTrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "SlowTrial"-------
    for thisComponent in SlowTrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    SlowLoop.addData('polygon.started', polygon.tStartRefresh)
    SlowLoop.addData('polygon.stopped', polygon.tStopRefresh)
    SlowLoop.addData('SlowText.started', SlowText.tStartRefresh)
    SlowLoop.addData('SlowText.stopped', SlowText.tStopRefresh)
    # check responses
    if SlowKey.keys in ['', [], None]:  # No response was made
        SlowKey.keys = None
        # was no response the correct answer?!
        if str(Correct).lower() == 'none':
           SlowKey.corr = 1;  # correct non-response
        else:
           SlowKey.corr = 0;  # failed to respond (incorrectly)
    # store data for SlowLoop (TrialHandler)
    SlowLoop.addData('SlowKey.keys',SlowKey.keys)
    SlowLoop.addData('SlowKey.corr', SlowKey.corr)
    if SlowKey.keys != None:  # we had a response
        SlowLoop.addData('SlowKey.rt', SlowKey.rt)
    SlowLoop.addData('SlowKey.started', SlowKey.tStartRefresh)
    SlowLoop.addData('SlowKey.stopped', SlowKey.tStopRefresh)
    # the Routine "SlowTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Encouragement"-------
    continueRoutine = True
    # update component parameters for each repeat
    encouragekey.keys = []
    encouragekey.rt = []
    _encouragekey_allKeys = []
    # keep track of which components have finished
    EncouragementComponents = [encouragetext, encouragekey]
    for thisComponent in EncouragementComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    EncouragementClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Encouragement"-------
    while continueRoutine:
        # get current time
        t = EncouragementClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=EncouragementClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *encouragetext* updates
        if encouragetext.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            encouragetext.frameNStart = frameN  # exact frame index
            encouragetext.tStart = t  # local t and not account for scr refresh
            encouragetext.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(encouragetext, 'tStartRefresh')  # time at next scr refresh
            encouragetext.setAutoDraw(True)
        
        # *encouragekey* updates
        waitOnFlip = False
        if encouragekey.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
            # keep track of start time/frame for later
            encouragekey.frameNStart = frameN  # exact frame index
            encouragekey.tStart = t  # local t and not account for scr refresh
            encouragekey.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(encouragekey, 'tStartRefresh')  # time at next scr refresh
            encouragekey.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(encouragekey.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(encouragekey.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if encouragekey.status == STARTED and not waitOnFlip:
            theseKeys = encouragekey.getKeys(keyList=['space'], waitRelease=False)
            _encouragekey_allKeys.extend(theseKeys)
            if len(_encouragekey_allKeys):
                encouragekey.keys = _encouragekey_allKeys[-1].name  # just the last key pressed
                encouragekey.rt = _encouragekey_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        if SlowLoop.thisN != 40:
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in EncouragementComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Encouragement"-------
    for thisComponent in EncouragementComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    SlowLoop.addData('encouragetext.started', encouragetext.tStartRefresh)
    SlowLoop.addData('encouragetext.stopped', encouragetext.tStopRefresh)
    # check responses
    if encouragekey.keys in ['', [], None]:  # No response was made
        encouragekey.keys = None
    SlowLoop.addData('encouragekey.keys',encouragekey.keys)
    if encouragekey.keys != None:  # we had a response
        SlowLoop.addData('encouragekey.rt', encouragekey.rt)
    SlowLoop.addData('encouragekey.started', encouragekey.tStartRefresh)
    SlowLoop.addData('encouragekey.stopped', encouragekey.tStopRefresh)
    # the Routine "Encouragement" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Advance"-------
    continueRoutine = True
    routineTimer.add(10.000000)
    # update component parameters for each repeat
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    AdvanceComponents = [text, key_resp_4]
    for thisComponent in AdvanceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    AdvanceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Advance"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = AdvanceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=AdvanceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                text.setAutoDraw(False)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_4.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_4.tStop = t  # not accounting for scr refresh
                key_resp_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_4, 'tStopRefresh')  # time at next scr refresh
                key_resp_4.status = FINISHED
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in AdvanceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Advance"-------
    for thisComponent in AdvanceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    SlowLoop.addData('text.started', text.tStartRefresh)
    SlowLoop.addData('text.stopped', text.tStopRefresh)
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    SlowLoop.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        SlowLoop.addData('key_resp_4.rt', key_resp_4.rt)
    SlowLoop.addData('key_resp_4.started', key_resp_4.tStartRefresh)
    SlowLoop.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'SlowLoop'

# get names of stimulus parameters
if SlowLoop.trialList in ([], [None], None):
    params = []
else:
    params = SlowLoop.trialList[0].keys()
# save data for this loop
SlowLoop.saveAsText(filename + 'SlowLoop.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "EndStudy"-------
continueRoutine = True
routineTimer.add(30.000000)
# update component parameters for each repeat
endstudykey.keys = []
endstudykey.rt = []
_endstudykey_allKeys = []
# keep track of which components have finished
EndStudyComponents = [EndStudyText, endstudykey]
for thisComponent in EndStudyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndStudyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "EndStudy"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = EndStudyClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndStudyClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *EndStudyText* updates
    if EndStudyText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        EndStudyText.frameNStart = frameN  # exact frame index
        EndStudyText.tStart = t  # local t and not account for scr refresh
        EndStudyText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(EndStudyText, 'tStartRefresh')  # time at next scr refresh
        EndStudyText.setAutoDraw(True)
    if EndStudyText.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > EndStudyText.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            EndStudyText.tStop = t  # not accounting for scr refresh
            EndStudyText.frameNStop = frameN  # exact frame index
            win.timeOnFlip(EndStudyText, 'tStopRefresh')  # time at next scr refresh
            EndStudyText.setAutoDraw(False)
    
    # *endstudykey* updates
    waitOnFlip = False
    if endstudykey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        endstudykey.frameNStart = frameN  # exact frame index
        endstudykey.tStart = t  # local t and not account for scr refresh
        endstudykey.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(endstudykey, 'tStartRefresh')  # time at next scr refresh
        endstudykey.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(endstudykey.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(endstudykey.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if endstudykey.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > endstudykey.tStartRefresh + 30-frameTolerance:
            # keep track of stop time/frame for later
            endstudykey.tStop = t  # not accounting for scr refresh
            endstudykey.frameNStop = frameN  # exact frame index
            win.timeOnFlip(endstudykey, 'tStopRefresh')  # time at next scr refresh
            endstudykey.status = FINISHED
    if endstudykey.status == STARTED and not waitOnFlip:
        theseKeys = endstudykey.getKeys(keyList=['space'], waitRelease=False)
        _endstudykey_allKeys.extend(theseKeys)
        if len(_endstudykey_allKeys):
            endstudykey.keys = _endstudykey_allKeys[-1].name  # just the last key pressed
            endstudykey.rt = _endstudykey_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndStudyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "EndStudy"-------
for thisComponent in EndStudyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('EndStudyText.started', EndStudyText.tStartRefresh)
thisExp.addData('EndStudyText.stopped', EndStudyText.tStopRefresh)
# check responses
if endstudykey.keys in ['', [], None]:  # No response was made
    endstudykey.keys = None
thisExp.addData('endstudykey.keys',endstudykey.keys)
if endstudykey.keys != None:  # we had a response
    thisExp.addData('endstudykey.rt', endstudykey.rt)
thisExp.addData('endstudykey.started', endstudykey.tStartRefresh)
thisExp.addData('endstudykey.stopped', endstudykey.tStopRefresh)
thisExp.nextEntry()

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
