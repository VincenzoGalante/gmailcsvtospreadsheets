# Gmail .csv to spreadsheet

Tired of manually updating your reports with CSVs from your inbox? This script goes into your inbox pulls the CSV from the mail and loads it into your specified spreadsheet. 

# What settings are needed?
The report has to be in your inbox within a mail - links to download the file do not work.

Specify the sender, the subject, the sheet ID and tab-name in the script file. The data range of the spreadsheet tab needs to be specififed as well. Set the incrementalReport variable to true if your report is always a complete data dump.

Set up a trigger in Apps Script so you dont need to manually fire up the script. Set up a filter in Gmail to remove the report messages from your inbox.

