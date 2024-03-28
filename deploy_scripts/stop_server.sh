#!/bin/bash

# Stop the application using PM2
pm2 stop receipts || true
pm2 delete receipts || true
