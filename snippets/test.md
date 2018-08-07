## Functions

<dl>
<dt><a href="#deleteRows">deleteRows(sheet, condition)</a></dt>
<dd><p>Removes rows from a sheet according to the condition</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#conditionCallback">conditionCallback</a> : <code>function</code></dt>
<dd><p>Returns true/false state for each row.</p>
</dd>
</dl>

<a name="deleteRows"></a>

## deleteRows(sheet, condition)
Removes rows from a sheet according to the condition

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sheet | <code>Sheet</code> | Represents the Sheet that is changing. |
| condition | [<code>conditionCallback</code>](#conditionCallback) | The callback that should return true/false state for each row. |

**Example**  
```js
// returns 2
deleteRows(5, 10);
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

