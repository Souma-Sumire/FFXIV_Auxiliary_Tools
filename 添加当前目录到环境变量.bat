@echo off
nul 2&1 %SYSTEMROOT%system32cacls.exe %SYSTEMROOT%system32configsystem
if '%errorlevel%' NEQ '0' (
echo Request administrator rights...
goto UACPrompt
) else ( goto gotAdmin )
UACPrompt
echo Set UAC = CreateObject^(Shell.Application^)  %temp%getadmin.vbs
echo UAC.ShellExecute %~s0, , , runas, 1  %temp%getadmin.vbs
%temp%getadmin.vbs
exit B
gotAdmin
setlocal enabledelayedexpansion
set tempPath=%~dp0
set tempPath=!tempPath~,-1!
reg add HKEY_LOCAL_MACHINESYSTEMCurrentControlSetControlSession ManagerEnvironment v SoumaTriggerFolder t REG_SZ d %tempPath% f
pause