'use strict';

var gulp = require("gulp"),
    browserSync = require('browser-sync').create();


// Запускаем локальный сервер (только после компиляции sass)
gulp.task('server', function () {  
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });  
});

// слежка и запуск задач 
gulp.task('watch', function () {
  gulp.watch([
    'app/**/*.html',
    'app/js/**/*.js'
  ]).on('change', browserSync.reload);
  gulp.watch([
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

// Задача по-умолчанию 
gulp.task('default', ['server', 'watch']);
