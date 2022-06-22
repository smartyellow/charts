'use strict';

module.exports = {

  // Friendly name
  name: 'Charts',

  // Brief description of this plugin
  purpose: 'Show nice charts in Webdesq CMS to present data clearly. Based on Chart.js.',

  // Version of this plugin
  version: '1.0.0',

  // Name of the plugin author
  author: 'Romein van Buren',

  // Name of vendor of this plugin
  vendor: 'Smart Yellow',

  // Array of plugins this plugin depends on
  requires: [],

  // Features this plugin offers
  features: {},

  icon: '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="64" d="M288 608V416c0-35.348-28.652-64-64-64h-64c-35.348 0-64 28.652-64 64v192c0 35.348 28.652 64 64 64h64c35.348 0 64-28.652 64-64Zm0 0V288c0-35.348 28.652-64 64-64h64c35.348 0 64 28.652 64 64v320m-192 0c0 35.348 28.652 64 64 64h64c35.348 0 64-28.652 64-64m0 0V160c0-35.348 28.652-64 64-64h64c35.348 0 64 28.652 64 64v448c0 35.348-28.652 64-64 64h-64c-35.348 0-64-28.652-64-64Zm0 0"/>',

  gui: {
    components: [
      'chart.svelte',
    ],
  },

};
