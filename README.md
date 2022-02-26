# Forgiva Web Client  

## INTRODUCTION

```
      .-" L_    
 ;`, /   ( o\   FORGIVA WebClient
 \  ;    `, /
 ;_/"`.__.-"
```


Forgiva Webclient is HTML/JS client for API sets of Forgiva Enterprise.

  
## BUILDING

### Automatic Build

You need docker installed for automated builds.

To run the project in dev mode:  
 ```
$ ./build.sh watch 
```  

To bundle:  
 ```
$ ./build.sh 
 ```  

The bundle will be saved as **forgiva_webclient-[VERSION]-release.tar.xz** 

### Manual Build

First you need node.js 10 or newer. https://nodejs.org/en/  

Secondly you will need to install yarn with

```
$ npm install -g yarn
```  

>> Note: Installation of Yarn via npm is generally not recommended. Installing Yarn with npm is non-deterministic, the package is not signed, and the only integrity check performed is a basic SHA1 hash, which is a security risk when installing system-wide apps.

>> For these reasons, it is highly recommended that you install Yarn through the installation method best suited to your operating system.)

After installing yarn you should install parcel with

```
$ yarn global add parcel-bundler
```

and finally you should run 

```
$ yarn install
```  

first time to install node modules.

And finally to generate distribution sources 

```
$ yarn build
```


### Development

To fasten development with latest version of Forgiva Integrator you can launch 
a custom container which mounts current dist folder into the container runtime.

You can use FORGIVA_WC_ROOT_DIR environment variable to redirect web server into
the build environment.


```
$ docker run -ti -p 8443:8443 -v <webclient-directory>/dist:/webclient -e FORGIVA_WC_ROOT_DIR=/webclient  forgiva_integrator:latest
```

And automate building with **watch** parameter of build.sh

```
$ ./build.sh watch
```

### Errors

For error: Cannot resolve dependency '@babel/runtime-corejs2/helpers/slicedToArray'

You should run:
```
 npm install @babel/runtime-corejs2 --save
```

and 

```> yarn install```  


## Contacts

You can reach main developer Harun Esur at

```
      root [at] sceptive [dot] com
```

or

```
      harun.esur [at] sceptive [dot] com
```