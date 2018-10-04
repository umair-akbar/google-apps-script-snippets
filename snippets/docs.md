## Members

<dl>
<dt><a href="#SPREADSHEET_ID">SPREADSHEET_ID</a></dt>
<dd><p>ID Таблицы</p>
</dd>
<dt><a href="#EDITOR_EMAIL">EDITOR_EMAIL</a></dt>
<dd><p>The user&#39;s email</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#FILE_ID">FILE_ID</a> : <code>string</code></dt>
<dd><p>The File ID</p>
</dd>
<dt><a href="#EMAIL">EMAIL</a> : <code>string</code></dt>
<dd><p>The email</p>
</dd>
<dt><a href="#FOLDER_ID">FOLDER_ID</a> : <code>string</code></dt>
<dd><p>The Folder ID</p>
</dd>
<dt><a href="#EMAIL">EMAIL</a> : <code>string</code></dt>
<dd><p>The email</p>
</dd>
<dt><a href="#SPREADSHEET_ID">SPREADSHEET_ID</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#UNIONRANGES">UNIONRANGES(...ranges)</a> ⇒ <code>Array.&lt;Array.&lt;object&gt;&gt;</code></dt>
<dd><p>A custom function. Unions ranges</p>
</dd>
<dt><a href="#driveChangeMeRole_">driveChangeMeRole_(fileId, email)</a> ⇒ <code>void</code></dt>
<dd><p>Downgrade you in the rights from the editor to the viewer</p>
</dd>
<dt><a href="#driveappChangeOwnerInFolder_">driveappChangeOwnerInFolder_(folderId, newOwnerEmail)</a> ⇒ <code>void</code></dt>
<dd><p>Changes the owner for all files in a folder</p>
</dd>
<dt><a href="#changeUserRole_">changeUserRole_(spreadsheet, email)</a></dt>
<dd></dd>
<dt><a href="#dataToHtmltable_">dataToHtmltable_(data)</a> ⇒ <code>string</code></dt>
<dd><p>Create HTML table from a 2d Array</p>
</dd>
<dt><a href="#deleteRowsByConditional_">deleteRowsByConditional_(sheet, condition)</a></dt>
<dd><p>Removes rows from a sheet according to the condition</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#conditionCallback">conditionCallback</a> : <code>function</code></dt>
<dd><p>Returns true/false state for each row.</p>
</dd>
</dl>

<a name="SPREADSHEET_ID"></a>

## SPREADSHEET_ID
ID Таблицы

**Kind**: global variable  
<a name="EDITOR_EMAIL"></a>

## EDITOR_EMAIL
The user's email

**Kind**: global variable  
<a name="FILE_ID"></a>

## FILE_ID : <code>string</code>
The File ID

**Kind**: global constant  
<a name="EMAIL"></a>

## EMAIL : <code>string</code>
The email

**Kind**: global constant  
<a name="FOLDER_ID"></a>

## FOLDER_ID : <code>string</code>
The Folder ID

**Kind**: global constant  
<a name="EMAIL"></a>

## EMAIL : <code>string</code>
The email

**Kind**: global constant  
<a name="SPREADSHEET_ID"></a>

## SPREADSHEET_ID
**Kind**: global constant  
<a name="UNIONRANGES"></a>

## UNIONRANGES(...ranges) ⇒ <code>Array.&lt;Array.&lt;object&gt;&gt;</code>
A custom function. Unions ranges

**Kind**: global function  
**Returns**: <code>Array.&lt;Array.&lt;object&gt;&gt;</code> - The unioned range  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| ...ranges | <code>object</code> | Data for union |

**Example**  
```js
=UNIONRANGES(Sheet1!A2:B,{{1,2,3};{4,5,6}}, A2, 36, "44", B3:C13)
```
<a name="driveChangeMeRole_"></a>

## driveChangeMeRole_(fileId, email) ⇒ <code>void</code>
Downgrade you in the rights from the editor to the viewer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fileId | <code>string</code> | The file id |
| email | <code>string</code> | You can pass your email and downgrade youself |

<a name="driveappChangeOwnerInFolder_"></a>

## driveappChangeOwnerInFolder_(folderId, newOwnerEmail) ⇒ <code>void</code>
Changes the owner for all files in a folder

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| folderId | <code>string</code> | The folder id |
| newOwnerEmail | <code>string</code> | The email |

<a name="changeUserRole_"></a>

## changeUserRole_(spreadsheet, email)
**Kind**: global function  

| Param | Type |
| --- | --- |
| spreadsheet | <code>GoogleAppsScript.Spreadsheet.Spreadsheet</code> | 
| email | <code>string</code> | 

<a name="dataToHtmltable_"></a>

## dataToHtmltable_(data) ⇒ <code>string</code>
Create HTML table from a 2d Array

**Kind**: global function  
**Returns**: <code>string</code> - HTML-string  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;Array.&lt;object&gt;&gt;</code> | The Spreadsheet data |

<a name="deleteRowsByConditional_"></a>

## deleteRowsByConditional_(sheet, condition)
Removes rows from a sheet according to the condition

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sheet | <code>Sheet</code> | Represents the Sheet that is changing. |
| condition | <code>[conditionCallback](#conditionCallback)</code> | The callback that should return true/false state for each row. |

**Example**  
```js
// Removes all rows where B column contains 10
deleteRowsByConditional_(SpreadsheetApp.getActiveSheet(),
  function(currentValue){
    return currentValue[1] === 10;
  }
);
```
<a name="conditionCallback"></a>

## conditionCallback : <code>function</code>
Returns true/false state for each row.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| currentValue | <code>Array</code> | The current row of the DataRange |
| index | <code>Number</code> | The index of the current row. The DataRange is reversed! |
| array | <code>Array</code> | The DataRange. The DataRange is reversed! |

