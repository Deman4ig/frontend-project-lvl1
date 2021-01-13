#!/usr/bin/env node
import gameLauncher from '../src/index.js';
import brainProgressionRound, { gameDescription } from '../src/games/brainProgressionRound.js';

gameLauncher(brainProgressionRound, gameDescription);
