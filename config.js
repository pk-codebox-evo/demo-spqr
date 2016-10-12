System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    '@angular': 'https://unpkg.com/@angular',
    'zone-js': 'https://unpkg.com/zone.js@0.6.25',
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.12',
    'baqend': 'https://unpkg.com/baqend@2.3.0'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    '@angular/core': {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'bundles/compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'bundles/common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'bundles/router.umd.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'bundles/forms.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'bundles/platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'bundles/platform-browser.umd.js',
      defaultExtension: 'js'
    },
    'zone-js': {
      main: 'dist/zone.js',
      defaultExtension: 'js'
    },
    'baqend': {
      main: 'dist/baqend.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});