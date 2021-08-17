#!/bin/bash

# Set up pre-commit
python -m pip install --upgrade pip
python -m pip install --user pre-commit
pre-commit install
# pre-commit autoupdate