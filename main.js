import { registerRootComponent } from 'expo';

import('./src/core/App').then((App) => registerRootComponent(App.default));
