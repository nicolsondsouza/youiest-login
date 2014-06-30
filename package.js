Package.describe({
  summary: "Youiest's login package"
});


Package.on_use(function (api) {
	api.add_files('login.js', 'client');
});