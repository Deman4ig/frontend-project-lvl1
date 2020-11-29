#!/usr/bin/env node
import getUserName from '../src/cli.js';
import brainEven from '../src/brainEven.js';

const userName = getUserName();
brainEven(userName);
