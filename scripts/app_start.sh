#!/bin/bash

runuser -l ubuntu -c 'pm2 start /var/www/FEM4Final/index.js -i 2 --exp-backoff-restart-delay=500'