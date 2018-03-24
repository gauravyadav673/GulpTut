# GulpTut
This repository is to help developers and students understand the use of Gulp library of nodejs.

## What is GULP?
Gulp is a Node.js library or toolkit for automating time consuming tasks in your developement workflow. It is highly useful when you want to automate the generation of production code from development code. Some of its uses are:-  
> - Uglifying or minifying javascript files or CSS files for better performance.(uses gulp-uglify module)  
> - Concatinating multiple javascript files into single javascript file to reduce load time and network load.(uses gulp-concat module)  
> - Minifying image sizes for optimization.(uses gulp-imagemin module)  
> - Converting scss files to CSS files.(uses gulp-sass module)  
> - Watching for any changes in the specified files and automatically changing the production code according to it.  
## How to use Gulp?
Pre-assuming that you know how to create a basic node.js project using npm, open a command window or terminal in your project directory and type the following command.  
```npm install -g gulp```  
The above command globally installs gulp on your system. Then run the following command.  
```npm install --save-dev gulp```  
Then create a file named __gulpfile.js__ in the root directory of your project.  
Have a look at the gulpfile of this project and you can now create tasks as shown in the file.   
For creating some tasks you may need to install gulp plugins or libraries, for example you need to create a task to uglifying your client side javascript files then you may need to install __gulp-uglify__ library.
Enter the following command in the terminal in root directory of your project.  
```npm install --save-dev gulp-uglify```  
After doing this you can now include this library in your gulp file by using ```require('gulp-uglify')```.  
For further details of implementation refer to the gulpfile of this project.
#### In this project the 'dist' folder contains exapmle production code and the 'src' folder contains example development code. You can delete the 'dist' folder and can recreate it from the development code by simply running ```gulp``` command.
 
