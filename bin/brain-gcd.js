#!/usr/bin/env node
import gameLauncher from '../src/index.js';
import brainGcdRound, { gameDescription } from '../src/games/brainGcdRound.js';

gameLauncher(brainGcdRound, gameDescription);
