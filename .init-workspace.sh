#!/bin/bash

# Set up pre-commit
python -m pip install --upgrade pip
pre-commit install
pre-commit autoupdate