const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const config = require("./gulp.config.js");


function copy(settings) {
	return gulp.src(settings.from)
		.pipe(gulp.dest(settings.to))
		.pipe(connect.reload());
}

gulp.task('html', function() {
	gulp.src(config.source + "*.html")
		.pipe(gulp.dest(config.build))
		.pipe(connect.reload());
  });

gulp.task("browserify", function() {
	return browserify(config.source + "js/index.js")
		.transform("babelify", {presets: ['es2015']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.build + "js/"))
		.pipe(connect.reload());
});

gulp.task("copy", function() {
	
	// Copy all HTML files
	copy({
		from: config.source + "*.html",
		to: config.build
	});

	// Copy all Images files
	copy({
		from: config.source + "images/**/*",
		to: config.build + "images/"
	});

	copy({
		from: "./node_modules/cadesignsystem/dist/images/**/*",
		to: config.build + "images/"
	});
});

gulp.task("sass", function() {
	const options = {
		outputStyle: "compressed"
	}
	return gulp.src(config.source + "scss/style.scss")
		.pipe(sass(options))
		.pipe(gulp.dest(config.build + "css/"))
		.pipe(connect.reload());
});

gulp.task("watch", ["sass", "copy", "browserify","html"], function() {
	gulp.watch(config.source + "scss/**/*", ["sass"]);
	gulp.watch("src/**/*.html", ["copy"]);
	gulp.watch(config.source + "js/**/*", ["browserify"]);
	gulp.watch("src/**/*.html", ["html"]);
});

gulp.task("connect", function() {
	connect.server({
		root: "build",
		livereload: true
	})
})

gulp.task("default", ["connect", "watch"]);