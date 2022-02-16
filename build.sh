#!/bin/bash
SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

if [ ! -d "node_modules" ]; then
   docker run -v "$SCRIPTPATH":/forgiva.webclient -e PARCEL_WORKERS=8 -ti sceptive/alpine-node:12 yarn --cwd /forgiva.webclient install 
   
fi

if [ "$1" == "watch" ]; then
    docker run -v "$SCRIPTPATH":/forgiva.webclient -e PARCEL_WORKERS=8 -ti sceptive/alpine-node:12 yarn --cwd /forgiva.webclient watch 
else

    TAGV=`git describe --tags --long || echo -n 'main'`
    REV=`git log --oneline | wc -l | tr -d ' '`
    VER=${TAGV%%-*}-$REV

    docker run -v "$SCRIPTPATH":/forgiva.webclient -e PARCEL_WORKERS=8 -ti sceptive/alpine-node:12 yarn --cwd /forgiva.webclient build
    (cd dist && tar -cJvf ../forgiva_webclient-$VER-release.tar.xz * )
fi
