import {header} from '../src/header.js'
import {home} from '../src/home.js'
import {dailyTask} from '../src/dailytask.js'
import {btnSetup} from '../src/btnsetup.js'
import { btnCogSetup } from './btncogsetup.js'
import {displayStorage} from '../src/taskcreator.js'

header()
// home()
dailyTask()
btnSetup()
btnCogSetup()

document.addEventListener('DOMContentLoaded', displayStorage);