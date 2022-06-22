<script>

import { onMount } from 'svelte';
import deepmerge from 'deepmerge';
import Chart from 'chart.js/auto';

// User settings
export let type = 'line';
export let data = [];
export let options = {};
export let plugins = [];

// Size
export let width = 400;
export let height = 400;

// Will be set during mount
export let canvas;
export let chart;

// Convenience flags
export let showLegend = true;
export let title = '';
export let subtitle = '';
export let beginAtZeroX = false;
export let beginAtZeroY = false;
export let showLabelsX = true;
export let showLabelsY = true;
export let disableAnimation = false;
export let intersect = false;

options = deepmerge({
  animation: disableAnimation ? false : undefined,
  interaction: {
    intersect,
  },
  plugins: {
    legend: {
      display: !!showLegend
    },
    title: {
      text: title,
      display: (title && title !== '')
    },
    subtitle: {
      text: subtitle,
      display: (subtitle && subtitle !== '')
    },
  },
  scales: {
    x: {
      beginAtZero: beginAtZeroX,
      display: showLabelsX,
    },
    y: {
      beginAtZero: beginAtZeroY,
      display: showLabelsY,
    },
  },
}, options);

onMount(() => {
  chart = new Chart(canvas, { type, data, options, plugins });
});

</script>

<canvas
  class="chart chart-{type}"
  bind:this={canvas}
  {width}
  {height}
/>
