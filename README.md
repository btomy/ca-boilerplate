CA boilerplate
======
A front-end boilerplate using [Gulp](http://gulpjs.com/ "Gulp.js") as build tool. 


### <a name="requirements"></a>Requirements  

* [Node.js](https://nodejs.org/en/ "Node.js") 

OS X users can install Node with [Homebrew](http://brew.sh/ "Homebrew").

```shell
$ brew install node
```

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md "Getting Started with Gulp")  

Install Gulp globally on your machine.

```shell
$ npm install -g gulp-cli
```
### <a name="start"></a>Quick start  
#### 1. Get the latest version  
[Download](https://github.com/btomy/ca-boilerplate/archive/master.zip "Download .zip") or clone the latest version of this boilerplate on your local machine by running:

```shell
$ git clone git@github.com:btomy/ca-boilerplate.git   
$ cd ca-boilerplate
```

#### 2. Install dependencies
Install our project dependencies and developer tools listed in `package.json`

```shell
$ npm install 
```

#### 3. Start developing
When it's done installing, you can start developing by running:  

```shell
$ gulp or npm start
```
This command will build our project from the source files (`src/`) into a temporary folder (`.build/`). Also starts a local web server that watches our files for changes.

> [http://localhost:8080](http://localhost:8080)

