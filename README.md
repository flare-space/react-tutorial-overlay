
![img](flare_space-simbol.svg)

[flare.space](https://flare.space) is dedicated to investing effort in developing and improving open-source tools that will help you simplify the process of developing new dApps on the Flare network.

# React Tutorial Overlay

This tool is designed to provide step-by-step guidance to users on how to interact with a specific dApp.

It includes tools to create clear instructions, visual aids, and interactive features to help users navigate through dApp and understand how to perform various functions.

The goal of a tutorial tool for dApps is to make the user experience as seamless and user-friendly as possible and increase user adoption.

## Usage

`react-tutorial-overlay` simplify implementation of overlay tutorial. Developer just needs to add id tags to HTML elements
anywhere on the page, create config object and add closeCallback function.
The id tags of desired elements are passed to each step config and elements should be picked up and highligted on the page.

The library can be used in React project by installing it from github repository.

Add it as dependency in `package.json` and run `npm install`

> ` "react-tutorial-overlay": "github:flare-space/react-tutorial-overlay",`

<br>

Now it can be imported as:

> `import { TutorialOverlay, StepConfig, StepsConfig } from "react-tutorial-overlay";`

<br>

And displayed in JSX:

> `{showTutorial && <TutorialOverlay config={config} closeCallback={close} />}`

`showTutorial` state variable is used to close it after `closeCallback` is executed.

Sample config object:

```
  const config: StepsConfig = {
    steps: new Map<number, StepConfig>(),
    infoBoxHeight: 200,                 // Height of the info box in px
    infoBoxMargin: 30,                  // Vertical distance from highlighted element and info box in px
    infoBoxThemeColor: "green",         // Info box theme color (Title, buttons, shadow)
    darkerBackground: true,             // Add darker overlay than original page
    scrollLock: true,                   // Locks scrolling until tutorial is displayed
    infoBoxShadow: true,                // Should info box cast small shadow (Useful on white background).
    highlightBoxBorderColor: "green",   // Border color of highlighted element.
    highlightBoxBorderRadius: 3,        // Border radius of highlighted border (It is applied only on outer side).
    highlightBoxBorderWidth: 3,         // Width of highlight border in px.
  };
```

All properties except `steps` are optional and will be replaced with default values.

  <br>

Additionally config for each step should be provided to config object.
Steps config should be set as `Map<number, StepConfig>`. The key represents step number.

Step config should include array of element ids that we want to be used as highlighted elements of each step.
There can be more elements per step, however info box will align next to first element in the array.

There are expected also `info` and `title` string inputs. Those are displayed inside step's info box.

Last option is `infoBoxAlignment`. There are two valid options: `left` and `center` with `center` being default.
It determines how is info box aligned in regard to highlighted element. With `left` both element starts at the same horizontal position.

Example for 3 steps:

```
  config.steps.set(1, {             // 1 is element key and represents step number
    highlightIds: ["El1"],          // HTML element id's for this step
    info: "This is first step",     // Info paragraph to be displayed in info box
    title: "Hello",                 // Title of the step
    infoBoxAlignment: "left",       // Info box alignment relative to highlighted element
  });

  config.steps.set(2, {             // required
    highlightIds: ["El3", "El2"],   // required
    info: "This is second step",    // optional
    title: "Hello again",           // optional
    infoBoxAlignment: "left",       // optional
  });

  config.steps.set(3, {
    highlightIds: ["El4"],
    info: "This is last step",
    title: "Bye",
    infoBoxAlignment: "center",
  });
```

<br>

To close tutorial (or any other code to be triggered on close) `closeCallback` can be used:

```
  const close = (): void => {
    // add code that needs to execute on close.

    // Set showTutorial state to false, to remove overlay from the page.
    setShowTutorial(false);
  };
```

Last thing to do is tag HTML elements with IDs that are provided in StepConfig's.

```
<div class="myPage">
    <div id="El1"></div>
    <div id="El2"></div>
    <div id="El3"></div>
    <div id="El4"></div>
</div>
```

<img width="507" alt="Screenshot 2023-03-13 at 13 39 38" src="https://user-images.githubusercontent.com/6474365/224705390-800a0864-b628-4ced-8302-d0b8f52d9a3a.png">




## Library Development

This library is set up to use Storybook for development purposes. Storybook behaves as sandbox to test components in isolation.

To start Storybook you need to downgrade node version to v16 or enable legacy OpenSSL provider. More info at this [Stackoverflow question](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

[Node Version Manager](https://github.com/nvm-sh/nvm) `nvm` can be used to change Node environment.

Display all installed versions

> `nvm list`

<br>

Install desired version:

> `nvm install 16`

<br>

It switch your node version

> `nvm use 16`

<br>

After that run `npm install` inside the project.

`npm run storybook` will start storybook with our stories at port 6006.

After storybook is up and running we can make changes in our components and story should be live reloaded on save.

## Building Library

To build the library we use [Rollup](https://rollupjs.org/introduction/) bundler.

To build library we use

> `npm run build-lib`

It compiles our source typescript and scss code and outputs it into `dist` folder.

`dist` folder should consist of `index.js` and `components` folder. Inside of `components` should be typescript declaration files (.d.ts) for each component.

We should manually create `index.d.ts` file and export declarations that we want to be used by the end user.

<br>

`index.d.ts`

```
export {
  TutorialOverlay,
  StepConfig,
  StepsConfig,
} from "./dts/components/TutorialOverlay";

```
