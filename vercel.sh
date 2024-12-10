if [[ $VERCEL_GIT_COMMIT_REF != "master" ]]; then
  echo "Skipping build for non-master branch"
  exit 0
fi
