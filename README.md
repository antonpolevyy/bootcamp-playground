
## About package-lock.json
Here I have included 'package-lock.json'into .gitignore 
Otherwise you can execute ```npm ci``` after you've done ```npm install``` once and you don't want to use someone's 'package-lock.json' from the repo

## Storybook addons

1) First install addon you want to use
For example:
```npm i @storybook/addon-actions -D```

2) Then import it in the .stories.js file
For example:
import { action } from "@storybook/addon-actions";

3) (Optional) it may or may not require including the reference in addons.js file
Example:
import '@storybook/addon-actions';
