@echo off
chcp 65001
setlocal
set name=
echo 1 "당신이 모르는 것"
echo 2 "천성의 약함"
echo 3 "Believe in you"
echo 4 "생명에게 미움받고 있어"
echo 5 "여자아이가 되고 싶어"
echo 6 "말 없는 흑백합"
echo 7 "ADAMAS"
echo 8 "거센 외로움이 덮쳐와"
echo 9 "윤회전생"
echo 10 "닌자의 권유"
echo 11 "새크리파이스"
echo 12 "테오"
echo 13 "히바나"
set /p name=번호를 입력하세요:
npx electron test "%name%"
