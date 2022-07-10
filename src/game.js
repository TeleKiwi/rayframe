const r = require('raylib');

// nice abstraction away from the bare metal Raylib
class Game
{
    //* Your global variables should go here.
    screenWidth;
    screenHeight;
    title;
    targetFPS;

    //* Called in main.js when game starts
    constructor(screenWidth, screenHeight, title, targetFPS) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.title = title;
        this.targetFPS = targetFPS;

        r.InitWindow(screenWidth, screenHeight, title);
        r.SetTargetFPS(targetFPS);
    }

    // Your game logic should go here. Don't do any rendering in this function!
    Tick = () => {
        
    }

    // This is where you should interact with Raylib's drawing functions.
    Render = () => {
        r.BeginDrawing();
        r.ClearBackground(r.RAYWHITE);

        r.DrawFPS(0, 0)
        r.DrawText("Congrats! You created your first rayframe window!", 135, 200, 20, r.LIGHTGRAY)

        r.EndDrawing();
    }

    // Convenience function.
    isRunning = () => { return !r.WindowShouldClose(); }

    // Convenience function. Returns horizontal centre.
    xCenter = () => { return (r.GetScreenWidth() / 2); } 

    // Convenience function. Returns vertical centre.
    yCenter = () => { return (r.GetScreenHeight() / 2); }

    // Handle all your destructions here e.g unloading textures.
    Exit = () => {
        r.CloseWindow();
    }
}

// export code
module.exports.Game = Game;