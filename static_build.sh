#!/bin/sh

npx next build
npx next export
find out/blogs | while read file; do
    grep -Eq "\.html$" <<<$file && grep -Evq "index\.html$" <<<$file
    if [[ $? -eq 0 ]]; then
        HTML_FILE=$(awk -F"/" '{print $(NF)}' <<<$file)
        LOCATION=$(sed "s/$HTML_FILE//" <<<$file)
        DIR_NAME=$(sed 's/\.html$//' <<<$HTML_FILE)
        if [[ ! -d $LOCATION$DIR_NAME ]]; then
            mkdir $LOCATION$DIR_NAME
        fi
        mv $LOCATION$HTML_FILE $LOCATION$DIR_NAME/index.html && \
            echo "Moving $LOCATION$HTML_FILE"
    fi
done
ls -l out | grep ^d | awk '{print $9}' | while read dir; do rm -rf $dir; done
mv out/* .
rmdir out