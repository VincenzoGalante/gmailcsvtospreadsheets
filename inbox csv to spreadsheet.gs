function inboxCsvToSpreadsheet() {
  const sender = "MAIL ADDRESS OF SENDER";
  const subject = "SUBJECT";
  const sheetID = "SHEET ID";
  const tabName = "TAB NAME";
  const dataRange = "DATA RANGE";
  const incrementalReport = false;

  const threads = GmailApp.search(`from:(${sender}) subject:(${subject})`);
  const messages = threads[0].getMessages();
  const length = messages.length;
  const lastMessage = messages[length - 1];
  const attachemnt = lastMessage.getAttachments()[0];
  const csvData = Utilities.parseCsv(attachemnt.getDataAsString(), ",");

  const ss = SpreadsheetApp.openById(`${sheetID}`).getSheetByName(`${tabName}`);
  const lastRow = ss.getLastRow();

  if (incrementalReport === true) {

    const destination = ss.getRange(lastRow + 1, 1, csvData.length, csvData[0].length);  
    destination.setValues(csvData);

  } else {

    const original = ss.getRange(`${dataRange}`);
    const destination = ss.getRange(1,1,csvData.length,csvData[0].length);

    original.clearContent();
    destination.setValues(csvData);

  }
}
