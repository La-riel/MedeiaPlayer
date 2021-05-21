@echo off
chcp 65001
setlocal
set name=
echo song number(1,2,3~) "song name"
set /p name=input number:
npx electron test "%name%"
