#!/bin/bash

# Using PM2 to start your application
cd /var/www/receipts/node-backend
npm install pm2 -g
pm2 start server.js #--name "receipts"