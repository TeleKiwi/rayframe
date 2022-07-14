# rayframe
 Basic OO abstraction layer/template for node-raylib projects.

# Pre-reqs
- Node.js >= 10.0
- TypeScript
- GNU Make
- Git (installation)

node-raylib is automatically included.
# Get started

## Auto
Click the 'Use this template' button to duplicate this repo and get started with it.

## Manual
    git clone https://github.com/TeleKiwi/rayframe
    cd (where you installed rayframe)

# RUNNING
As of rayframe v1.1, TS is now auto-configured. There's a makefile (yes, ik, a makefile for TS) to automate the transpilation and running process.

## wait a makefile? why
To put it simply, maintaining a package.json file gets... tedious, after a while.

## Build your files
    make
SUPER IMPORTANT NOTE: make sure to add ALL your TypeScript files in the makefile, otherwise your game might not work properly!

## Run your files
    make run

## Clear the js directory
    make clean