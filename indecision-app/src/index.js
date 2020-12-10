import React, { useState } from "react";
import { render } from "react-dom";
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './style/main.scss'
render(<IndecisionApp />, document.getElementById('app'))