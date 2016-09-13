'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './components/components';
import './assets/scss/main.scss';

angular.module('myApp', [
  uiRouter,
  Components.name
]).directive('app', AppComponent);