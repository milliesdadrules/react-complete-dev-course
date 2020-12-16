import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './style/main.scss'


ReactDOM.render(<AppRouter />, document.getElementById('app'))