#!/bin/bash

echo Running database tests
echo node ./modules/db/test.js
echo
node ./modules/db/test.js

echo Running encryption tests
echo node ./modules/encryption/test.js
echo
node ./modules/encryption/test.js
