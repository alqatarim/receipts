#!/bin/bash

# Update the package listings on your instance
sudo yum update -y

# Install Node.js if it's not already installed (Amazon Linux example)
curl -sL https://rpm.nodesource.com/setup_20 | sudo bash -
sudo yum install -y nodejs

# Clean up the previous deployment (if necessary)
rm -rf /var/www/receipts/*
