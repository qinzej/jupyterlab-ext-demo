import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the lab-ext-demo extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'lab-ext-demo',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension lab-ext-demo is activated!');
  }
};

export default extension;
