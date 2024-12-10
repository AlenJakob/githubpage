#!/bin/bash

# Logowanie gałęzi
echo "Branch being deployed: $VERCEL_GIT_COMMIT_REF"

# Sprawdzenie, czy gałąź jest "master", jeśli nie to przerywamy proces
if [[ $VERCEL_GIT_COMMIT_REF != "master" ]]; then
  echo "Skipping build for non-master branch"
  exit 0  # Zatrzymanie skryptu dla innych gałęzi
fi

# Jeżeli gałąź to "master", kontynuuj build
echo "Building branch: master"

# Tutaj reszta kroków budowy/deploy
# np. kompilacja, uruchomienie testów, itd.