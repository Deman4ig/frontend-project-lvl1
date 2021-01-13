#!/usr/bin/env node
import gameLauncher from '../src/index.js';
import brainCalcRound, { gameDescription } from '../src/games/brainCalcRound.js';

gameLauncher(brainCalcRound, gameDescription);
