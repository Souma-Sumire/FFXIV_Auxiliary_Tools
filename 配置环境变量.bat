@echo off
%1 start "" mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c ""%~s0"" ::","","runas",1)(window.close)&&exit
setlocal enabledelayedexpansion
set tempPath=%~dp0
set tempPath=!tempPath:~,-1!
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v SoumaTriggerFolder /t REG_SZ /d "%tempPath%" /f
set input=2019
set /p input=输入鲶鱼精邮差监听端口（留空则为2019）:
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v PostNamazu /t REG_SZ /d "%input%" /f
echo 已设置为%input%
pause