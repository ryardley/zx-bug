#!/usr/bin/env node
import { spawn } from "child_process";

spawn(`./colors.js`, { shell: true, stdio: "inherit" });
