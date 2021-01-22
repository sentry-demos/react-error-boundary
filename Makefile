SENTRY_ORG=will-captel
SENTRY_PROJECT=javascript-1
RELEASE=`sentry-cli releases propose-version`
PREFIX=static/js
SENTRY_LOG_LEVEL=debug

all: build setup_release run

build:
	npm run build

setup_release: create_release upload_sourcemaps

create_release:
	sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(RELEASE)
associate_commits:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(RELEASE)
upload_sourcemaps:
	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(RELEASE) \
		upload-sourcemaps --url-prefix "~/$(PREFIX)" --validate build/$(PREFIX)

run:
	./node_modules/serve/bin/serve.js -s build

.PHONY: all build setup_release create_release associate_commits upload_sourcemaps run