.PHONY: all clean build

CSS_FILES := $(wildcard assets/css/*.css)
MIN_CSS_FILES := $(patsubst assets/css/%.css,assets/css/%.min.css,$(filter-out %.min.css,$(CSS_FILES)))

all: build

build: $(MIN_CSS_FILES)

assets/css/%.min.css: assets/css/%.css
	npx clean-css-cli $< -o $@

clean:
	rm -f assets/css/*.min.css
