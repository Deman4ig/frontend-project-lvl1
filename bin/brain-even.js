#!/usr/bin/env node
import gameLauncher from '../src/index.js';
import brainEvenRound, { gameDescription } from '../src/games/brainEvenRound.js';

gameLauncher(brainEvenRound, gameDescription);
