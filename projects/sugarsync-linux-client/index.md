---
layout: page
title : SugarSync – Linux Client
header : SugarSync – Linux Client
group: navigation
---
{% include JB/setup %}

#Discontinued
	Unfortunately I am no longer contributing to this project. There were a couple of issues with Sugar syncs API that meant I was not able to reduce the amount of work the client had to do (it would sit at 100% constantly). The problem was I had to traverse the whole local folder structure to check for any changes and also (at the same time) check the whole remote folder strucutre for changes.

	What I had request was a "timeline" of changes from the API - so after giving a timestamp I could get a list of changes. Unfortunately this did not happen.

	Thanks for you help and time though guys.



I started developing a Linux client for SugarSync. At the moment there is no client, so I am using there new API system to build a client for Linux users. This is currently in early alpha stages, Currently things i've done are:

* Authorization
* Get user info (disk usage/etc)
* Get initial folder names
* Recursively Download (with progress meter) / Create (locally) all folders / files if they don't exist
* notify-send integration for file download completion
* File last modified checks before re-downloading a file
* File / folder uploads
* iNotify - used to detect file changes (files moved in/changed/deleted0


####In Progress:

* File Rename - Working within the same directory
* File Deletion - Deleted files will be visible in the "Deleted Items" folder on the server, allowing for undo
* Fixing lingering bug with parent folders


####On the todo list is:
* Bug testing
* Code Cleanup
* Extensive Testing
* This list is not extensive and will grow.


##UPDATE

I have uploaded an ALPHA release onto [github](https://github.com/markwillis82/Sugar-Sync-Linux-Client)

Just for initial testing and hopefully drive me to get it finished. I've been incredibly busy recently but now giving some more time to this project. So will see some updates soon. (just got to get used to github.

##UPDATE - 14/12/2010
I have updated git (eventually) with a few updates...
Now if we cannot connect to the database it exits gracefully (thanks to Russell for testing that one) and also a safety feature - When a file is "deleted" it is now moved to the "deleted files" folder on the sugarsync web directory.

Status - Below is a list of sections of code and there progress
* Add File - done
* Delete File - done
* Update File - done
* Rename File - done
* Copy/Paste File - todo
* Copy/Paste file between folders - todo
* Move File between Folders - todo
* Detect deleted files whilst program is not running - todo
* Check for file updates from server whilst running - in progress
* sqlite conversion - test performance - todo