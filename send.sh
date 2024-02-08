#!/usr/bin/bash 
rsync -rv -e 'ssh -p 21098' --progress ./build/ soailehx@162.213.255.52:public_html
