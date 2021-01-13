#!/usr/bin/env node
import gameLauncher from '../src/index.js';
import brainPrime, { gameDescription } from '../src/games/brainPrimeRound.js';

gameLauncher(brainPrime, gameDescription);
