<?PHP

function drawTable($cellsArr, $colHeadersArr, $rowHeadersArr, $colsArr = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10), $rowsArr = array(0, 1, 2, 3, 4, 5, 6, 7)) {
	global $languageArr;
	
	$colspan = 1;	
	
	// Finding colspan needed in dental, alveolar, postalveolar problem
	if(in_array(2, $colsArr)) {
		$numberOfSpecials++;
	}	
	
	if(in_array(3, $colsArr)) {
		$numberOfSpecials++;
	}	

	if(in_array(4, $colsArr)) {
		$numberOfSpecials++;
	}	

	// Header
	print('<table border="1"><tr><td>&nbsp;</td>');
	
	foreach($colsArr as $col) {
		print('<td>' . ucfirst($colHeadersArr[$col]) . '</td>');
	}
	
	print('</tr>');
	
	// Drawing cells
	foreach($rowsArr as $row) {
		print('<tr><td>' . ucfirst($rowHeadersArr[$row]) . '</td>');
		
		
		foreach($colsArr as $col) {
			// Skipping printing if in dental/alveolar/postalveolar problem
			if($row != 4 && ($col == 2 || $col == 4) && in_array(3, $colsArr)) {
				$skip = true;
			} 		

			if($row != 4 && $col == 3) {
				$colspan = $numberOfSpecials;

			} 		

			// Printing cell content if not told to skip it
			if(!$skip) {		
				
				print('
				<td colspan="' . $colspan . '" align="center" height="100%">
				<table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
				<tr style="height: 35px;">				
				');				
				
				// If there is both voiced and unvoiced:
				if($cellsArr[$col][$row][0] && $cellsArr[$col][$row][1]) {
					print('<td width="50%" height="100%" align="center" onMouseOver="this.className=\'rowMouseOver\';" onMouseOut="this.className=\'rowNotMouseOver\';" onClick="' . $cellsArr[$col][$row][0]['onClick'] . '">' . $cellsArr[$col][$row][0]['content'] . '</td>');
					print('<td width="50%" height="100%" align="center" onMouseOver="this.className=\'rowMouseOver\';" onMouseOut="this.className=\'rowNotMouseOver\';" onClick="' . $cellsArr[$col][$row][1]['onClick'] . '">' . $cellsArr[$col][$row][1]['content'] . '</td>');
				} else {
					if($cellsArr[$col][$row][0]) {
						print('<td width="100%" height="100%" align="center" onMouseOver="this.className=\'rowMouseOver\';" onMouseOut="this.className=\'rowNotMouseOver\';" onClick="' . $cellsArr[$col][$row][0]['onClick'] . '">' . $cellsArr[$col][$row][0]['content'] . '</td>');
					}
					
					if($cellsArr[$col][$row][1]) {
						print('<td width="100%" height="100%" align="center" onMouseOver="this.className=\'rowMouseOver\';" onMouseOut="this.className=\'rowNotMouseOver\';" onClick="' . $cellsArr[$col][$row][1]['onClick'] . '">' . $cellsArr[$col][$row][1]['content'] . '</td>');
					}
				}
				
				
				
				print('
				</tr>
				</table>
				</td>');
			} 		
		
			unset($skip);
			$colspan = 1;
		}	
		print('</tr>');
	}				
	
	print('</table>');
}
		
function drawTrapezium($vowelsArr, $colHeadersArr, $rowHeadersArr, $colHeaderAnchorsArr = array(), $rowHeaderAnchorsArr = array()) {
	
	
	$layerID = rand(0, 500000);	
	
	print('<table border="0" cellspacing="0" cellpadding="0"><tr><td>');
	
	print('<div style="position:relative;" id="vowelTrapezium_' . $layerID . '">' . "\n");		
	print('<img src="' . GFX_URL . '/vowel_trapezium.png" id="trapezium_' . $layerID . '">' . "\n");
	
	
	// Printing vowels	
	foreach($vowelsArr as $string) {
	
		print($string . "\n");	
	}
	
	// Printing labels
	$y = 15;
	$xArr[1] = 50;	
	$xArr[2] = 200;	
	$xArr[3] = 360;	

	foreach($colHeadersArr as $i => $header) {
		if($colHeaderAnchorsArr[$i]) {
			print('<a href="' . $colHeaderAnchorsArr[$i] . '">'); 	
		}

		print('<img src="' . DATA_URL . '/php/textImage.php?string=' . urlencode($header) . '&fontSize=13" style="position:absolute; left:' . $xArr[$i] . 'px; top:' . $y . 'px;" border="0">' . "\n");

		if($colHeaderAnchorsArr[$i]) {
			print('</a>'); 	
		}

	}

	$xInterval = 0;	
	$xArr[1] = 0;	
	$xArr[2] = $xInterval;	
	$xArr[3] = $xInterval * 2;	
	$xArr[4] = $xInterval * 3;	

	$yStart = 40;	
	$yInterval = 78;	
	$yArr[1] = $yStart;	
	$yArr[2] = $yStart + $yInterval;	
	$yArr[3] = $yStart + $yInterval * 2;	
	$yArr[4] = $yStart + $yInterval * 3;	

	foreach($rowHeadersArr as $i => $header) {
		if($rowHeaderAnchorsArr[$i]) {
			print('<a href="' . $rowHeaderAnchorsArr[$i] . '">'); 	
		}
			
		print('<img src="' . DATA_URL . '/php/textImage.php?string=' . urlencode($header) . '&fontSize=13" style="position:absolute; left:' . $xArr[$i] . 'px; top:' . $yArr[$i] . 'px;" border="0">' . "\n");

		if($rowHeaderAnchorsArr[$i]) {
			print('</a>'); 	
		}

	}

	
	print('</div>');
	
	print('</td></tr></table>');	
	
	return $layerID;
}

	
